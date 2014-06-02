var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

var genres = [];
module.exports = function() {
	return combine(
		split('\n'),
		through(groupBooks),
		zlib.createGzip());
}

function groupBooks(buf) {
	if (!buf) {
		var self = this;
		genres.forEach(function(genre) {
			self.queue(JSON.stringify(genre)).queue('\n');
		});
		return;
	};

	var obj = JSON.parse(buf);
	if (obj.type === 'genre') {
		genres.push({
			name: obj.name,
			books: []
		});
	}
	else if (obj.type === 'book') {
		var genre = genres.pop();
		genre.books.push(obj.name);
		genres.push(genre);
	}
}