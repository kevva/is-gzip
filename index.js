'use strict';

module.exports = function (buf) {
	if (!buf || buf.length < 3) {
		return false;
	}

	return buf[0] === 31 && buf[1] === 139 && buf[2] === 8;
};
