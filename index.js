'use strict';
module.exports = function (item, n) {
	var ret = new Array(n);
	var isCb = typeof item === 'function';

	if (!isCb && typeof ret.fill === 'function') {
		return ret.fill(item);
	}

	for (var i = 0; i < n; i++) {
		ret[i] = isCb ? item(i, ret, n) : item;
	}

	return ret;
};
