const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('assert');
const gutil = require('gulp-util');
const gulp = require('gulp');
// const plumber = require('gulp-plumber');
const tslint = require('gulp-tslint');
const reporter = require('../');

require('./sandbox');

describe('TSLint', function() {
	it('console reporter', function(done) {
		return gulp.src('test/fixtures/tslint/invalid.ts', {
			base: process.cwd()
		})
			.pipe(tslint())
			.pipe(reporter())

			.on('error', function(ex) {
				assert.equal(ex.plugin, 'gulp-reporter');
				assert.equal(ex.message, 'Lint failed for: test/fixtures/eslint/invalid.js');
			}).on('finish', function() {
				var result = gutil.log.lastCall.args[0].split(/\s*\r?\n\s*/g);
				assert.equal(result[0], 'test/fixtures/tslint/invalid.ts');
				assert.equal(result[1], '[1:9] missing whitespace (TSLint one-line)');
				assert.equal(result[5], '[1:15] missing whitespace (TSLint whitespace)');
				done();
			});
	});
	it('fail function', function(done) {
		var error;
		return gulp.src('test/fixtures/tslint/invalid.ts', {
			base: process.cwd()
		})
			.pipe(tslint())
			.pipe(reporter({
				fail: function() {
					return false;
				}
			}))

			.on('error', function(ex) {
				error = error || ex;
			}).on('finish', function() {
				assert.ok(! error);
				done();
			});
	});
});