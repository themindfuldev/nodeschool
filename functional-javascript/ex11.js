module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(prev, curr, index, array) {
		prev[index] = fn(curr);
		return prev;
	}, []);
}