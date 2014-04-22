/*global describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var isGzip = require('../');
var path = require('path');

describe('isGzip()', function () {
    function check(file) {
        return isGzip(fs.readFileSync(file));
    }

    it('should detect GZIP from buffer', function (cb) {
        assert(check(path.join(__dirname, 'fixtures/test.tar.gz')));
        cb();
    });

    it('should detect GZIP from Uint8Array', function () {
        var buf = new Uint8Array([31, 139, 8, 0]);
        assert(isGzip(buf));
    });
});
