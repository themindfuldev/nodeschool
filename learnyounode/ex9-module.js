var http = require('http');

module.exports = function(url, callback) {
	http.get(url, function(response) {
		response.setEncoding('utf8');

		var allDataReceived = '';
		response.on('data', function(data) {
			allDataReceived += data;
		});

		response.on('end', function() {
			callback(null, allDataReceived);
		})

		response.on('error', function() {
			callback('there was an error on ' + url);
		})
	});
}