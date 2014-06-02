var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
	var counts = {};
	var inStream = process.stdin.pipe(through(function(buf) {
		counts[buf.country] = counts[buf.country]+1 || 1;
	}, function() {
    	counter.setCounts(counts);
	}));

    // return a duplex stream to capture countries on the writable side
    // and pass through `counter` on the readable side

    return duplexer(inStream, counter);
};