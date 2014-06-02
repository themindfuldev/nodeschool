var net = require('net');

var zeroFill = function(number) {
	return ('0' + number).slice(-2);
}

var server = net.createServer(function(socket) {
	var date = new Date();
	var formattedDate =
		date.getFullYear() + '-' +
    	zeroFill(date.getMonth()+1) + '-' +
    	zeroFill(date.getDate()) + ' ' +
    	zeroFill(date.getHours()) + ':' +
    	zeroFill(date.getMinutes());
	socket.end(formattedDate);
})
server.listen(process.argv[2]);