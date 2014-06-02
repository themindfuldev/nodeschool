var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  	var parsedUrl = url.parse(req.url, true);
  	var date = new Date(parsedUrl.query.iso);
  	var response = {};

  	switch (parsedUrl.pathname) {
  		case '/api/parsetime':
  			response.hour = date.getHours();
  			response.minute = date.getMinutes();
  			response.second = date.getSeconds();
  		break;

  		case '/api/unixtime':
  			response.unixtime = date.getTime();
  		break;
  	}

  	res.writeHead(200, { 'Content-Type': 'application/json' });
  	res.end(JSON.stringify(response));

})
server.listen(process.argv[2]);
