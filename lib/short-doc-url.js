'use strict';
const got = require('got');
const locale = require('./locale');
const isCI = require('ci-info').isCI;
const inGFW = locale === 'zh_CN' && (isCI || new Date().getTimezoneOffset() === -480);
const shorturlCache = require(inGFW ? './shorturl_cn.json' : './shorturl.json');
const googl = require('goo.gl');
// Set a developer key (_required by Google_; see http://goo.gl/4DvFk for more info.)
googl.setKey('AIzaSyACqNSi3cybDvDfWMaPyXZEzQ6IeaPehLE');

function shortDocUrl (error) {
	if (!error.doc) {
		return error;
	}
	return shortUrl(error.doc).then(shortUrl => {
		if (shortUrl) {
			error.docShort = shortUrl;
		}
		return error;
	}, () => {
		return error;
	});
}

function shortUrl (url) {
	url = url.toLowerCase();
	if (shorturlCache[url]) {
		return Promise.resolve(shorturlCache[url]);
	}

	if (!inGFW) {
		return googl.shorten(url);
	}

	return got(`http://api.t.sina.com.cn/short_url/shorten.json?source=3271760578&url_long=${url}`, {
		json: true,
	}).then(result => {
		return result.body[0].url_short;
	});
}

module.exports = function (errors) {
	return Promise.all(errors.map(shortDocUrl));
};
