'use strict';
module.exports = function (str, n) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	var ret = new Array(n);

	for (var i = 0; i < n; i++) {
		ret[i] = str;
	}

	return ret;
};
