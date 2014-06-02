function repeat(operation, num) {
    // modify this so it can be interrupted
	if (num <= 0 ) return;
	operation();
	return setTimeout(repeat, 1500, operation, num);
}

module.exports = repeat