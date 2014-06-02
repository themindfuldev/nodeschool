function reduce(arr, fn, initial) {
	if (!arr.length) return initial;

	var head = arr[0];
    var tail = arr.slice(1);
    return reduce(tail, fn, fn(initial, head));
}

module.exports = reduce;