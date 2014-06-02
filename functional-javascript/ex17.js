function curry(fn, n, maxN, args) {
	if (n === 0) {
		return fn.apply(fn, args);
	}
	return function(arg) {
		var index = maxN-n;
		args[index] = arg;
		return curry(fn, n-1, maxN, args);
	}
}

function curryN(fn, n) {
	n = n || fn.length;

    return function(arg) {
    	return curry(fn, n-1, n, [arg]);
    };
}

module.exports = curryN;