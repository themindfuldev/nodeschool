function duckCount() {
	var args = Array.prototype.slice.call(arguments, 0);
	return args.reduce(function(prev, curr) {
		return prev + (Object.prototype.hasOwnProperty.call(curr, 'quack')? 1: 0);
	}, 0);
}

module.exports = duckCount;