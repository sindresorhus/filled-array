'use strict';
module.exports = function (str, n) {
	var ret = new Array(n);

	if (typeof ret.fill === 'function') {
		return ret.fill(str);
	}

	for (var i = 0; i < n; i++) {
		ret[i] = str;
	}

	return ret;
};
