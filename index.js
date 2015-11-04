'use strict';
module.exports = function (str, n) {
	var ret = new Array(n);

	for (var i = 0; i < n; i++) {
		ret[i] = str;
	}

	return ret;
};
