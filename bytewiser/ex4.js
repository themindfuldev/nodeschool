var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n');
lines.forEach(function(line) {
	var buf = new Buffer(line);
	console.log(buf);
});
