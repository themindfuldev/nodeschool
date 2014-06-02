var readAndFilter = require('./ex6-module.js')

var dir = process.argv[2];
var extension = process.argv[3];

readAndFilter(dir, extension, function(err, list) {
	if (err) {
		console.log('There was an error: ' + err);
		return;
	}
	var length = list.length;
	for (var i = 0; i < length; i++) {
		console.log(list[i]);
	}
});
