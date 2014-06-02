var through = require('through');
var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write)).pipe(res);
    }
});
server.listen(process.argv[2]);

function write(buf) {
	this.queue(buf.toString().toUpperCase());
}