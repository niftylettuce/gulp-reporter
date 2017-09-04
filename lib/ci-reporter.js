'use strict';
const checkstyleFormatter = require('checkstyle-formatter');
const reportBuilder = require('junit-report-builder');
const fs = require('fs-extra');
const ci = require('ci-info');
const path = require('path');
const got = require('got');
const url = require('url');
const icons = require('./icons');
const { URL } = url;
const privatePrefix = ci.isCI && ci.name && ci.name.replace(/\s*CI$/i, '').toUpperCase() + '_';
const reportPath = path.join.bind(path, getEnv('REPORTS', 'REPORT_PATH', 'TEST_REPORTS') || 'lint-reports');
let appveyorApiUrl = process.env.APPVEYOR_API_URL;

const category = {
	warn: 'Warning',
	info: 'Information',
	error: 'Error',
};
const severity = {
	warn: 'warning',
	info: 'information',
};

function noop() {
	return Promise.resolve();
}

function appveyor(errors) {
	errors = errors.map(error => {
		got.post(appveyorApiUrl, {
			body: {
				message: `${icons[error.severity] || icons.success} ${error.message}`,
				category: category[error.severity] || error.severity,
				details: [error.plugin, error.rule, (error.docShort || error.doc)].filter(Boolean).join(' '),
				fileName: error.fileName,
				line: error.lineNumber,
				column: error.columnNumber,
				projectName: [error.plugin, error.rule].filter(Boolean).join(' '),
			},
			json: true,
		});
	});
	return Promise.all(errors);
}

function getEnv(names) {
	names = Array.from(arguments);
	let name;
	let value;
	while ((name = names.pop())) {
		value = (privatePrefix && process.env[privatePrefix + name]) || process.env['CI_' + name] || process.env[name];
		if (value) {
			return value;
		}
	}
}

function junit(errors) {
	const builder = reportBuilder.newBuilder();
	Object.keys(errors).forEach(fileName => {
		const suite = builder.testSuite().name(fileName);
		errors[fileName].forEach(error => {
			const testCase = suite.testCase()
				.name(`${icons[error.severity] || icons.success} ${error.message}`)
				.className([error.plugin, error.rule].filter(Boolean).join(' '));
			const message = `${error.fileName}:${error.lineNumber}:${error.columnNumber}`;
			if (!error.severity || error.severity === 'error') {
				testCase.error(message);
			} else {
				testCase.failure(message);
			}
		});
	});

	return fs.outputFile(reportPath(String(Date.now()), 'lint-result.xml'), builder.build());
}

function checkstyle(errors) {
	const results = [];

	Object.keys(errors).forEach(filename => {
		results.push({
			filename,
			messages: errors[filename].map(error => ({
				severity: severity[error.severity] || error.severity,
				column: error.columnNumber,
				line: error.lineNumber,
				message: `${icons[error.severity] || icons.success} ${error.message}`,
				source: [error.plugin, error.rule].filter(Boolean).join(' '),
			}))
		});
	});

	return fs.outputFile(
		reportPath(String(Date.now()), 'checkstyle-result.xml'),
		checkstyleFormatter(results)
	);
}

function getErrorsByFile(errors) {
	const result = {};
	errors.forEach(function(error) {
		if (result[error.fileName]) {
			result[error.fileName].push(error);
		} else {
			result[error.fileName] = [error];
		}
	});
	return result;
}

function getErrors(files, callback) {
	const errors = files && files.reduce((errors, file) => (
		errors.concat(file.report.errors)
	), []).filter(Boolean);
	if (!errors || !errors.length) {
		return noop();
	}
	return callback(errors).then(noop);
}

if (appveyorApiUrl) {
	if (URL) {
		appveyorApiUrl = new URL('api/build/compilationmessages', appveyorApiUrl).href;
	} else {
		appveyorApiUrl = url.resolve(appveyorApiUrl, 'api/build/compilationmessages');
	}
}

if (process.env.SONAR_SCANNER_HOME) {
	module.exports = files => (
		getErrors(files, errors => (
			fs.outputJson(
				reportPath(String(Date.now()), 'sonar-result.json'),
				errors.map(error => (
					error.concise
				))
			)
		))
	);
} else if (privatePrefix) {
	let appveyorApiUrl = process.env.APPVEYOR_API_URL;
	if (appveyorApiUrl) {
		if (URL) {
			appveyorApiUrl = new URL('api/build/compilationmessages', appveyorApiUrl).href;
		} else {
			appveyorApiUrl = url.resolve(appveyorApiUrl, 'api/build/compilationmessages');
		}
	}
	module.exports = files => (
		getErrors(files, errors => {
			if (appveyorApiUrl) {
				return appveyor(errors);
			} else {
				const errorSet = getErrorsByFile(errors);
				if (ci.CIRCLE) {
					return junit(errorSet);
				} else {
					return checkstyle(errorSet);
				}
			}
		})
	);
} else {
	module.exports = noop;
}
