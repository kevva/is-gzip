'use strict';

var path = require('path');
var readChunk = require('read-chunk');
var test = require('ava');
var isGzip = require('../');

test('should detect GZIP from buffer', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixtures/test.tar.gz'), 0, 4, function (err, buf) {
		t.assert(!err, err);
		t.assert(isGzip(buf));
	});
});
