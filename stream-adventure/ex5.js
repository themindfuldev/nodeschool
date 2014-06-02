var split = require('split');
var through = require('through');

process.stdin
	.pipe(split('\n'))
	.pipe(through(write))
	.pipe(process.stdout);

var counter = 0;
function write(buf) {
	var line;
	if (counter++ % 2 === 0) {
		line = buf.toString().toLowerCase();
	}
	else {
		line = buf.toString().toUpperCase();
	}
	this.queue(line).queue('\n');
}