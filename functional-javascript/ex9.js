function logger(namespace) {
	return function() {
		var args = Array.prototype.slice.call(arguments, 0);
		args.unshift(namespace);
		console.log.apply(console, args);
	}
}

module.exports = logger