var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function(err, list) {
	if (!err) {
		var length = list.length;
		for (var i = 0; i < length; i++) {
			var file = list[i];
			if (path.extname(file) === '.' + extension) {
				console.log(file);
			}
		}
	}
});
