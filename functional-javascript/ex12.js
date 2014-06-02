function Spy(target, method) {
	var self = this;
	var originalMethod = target[method];
	target[method] = function() {
		self.count = (self.count || 0) + 1;
		return originalMethod.apply(this, arguments);
	};
	return this;
}

module.exports = Spy;