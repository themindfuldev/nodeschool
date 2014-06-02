var http = require('http');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');

	var allDataReceived = '';
	response.on('data', function(data) {
		allDataReceived += data;
	});

	response.on('end', function() {
		console.log(allDataReceived.length);
		console.log(allDataReceived);
	})
});