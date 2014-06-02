var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}

		var length = list.length;
		var filteredList = [];
		for (var i = 0; i < length; i++) {
			var file = list[i];
			if (path.extname(file) === '.' + extension) {
				filteredList.push(file);
			}
		}
		return callback(err, filteredList);
	});
}