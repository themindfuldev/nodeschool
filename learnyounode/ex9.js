var getData = require('./ex9-module.js');

var pages = [];
var i = 0;
process.argv.slice(2).forEach(function(arg) {
	pages[i++] = {
		url: arg,
		processed: false,
		data: null
	};
});

function isProcessed() {
	return pages.every(function(page) {
		return page.processed === true;
	})
}

pages.forEach(function(page) {
	getData(page.url, function(err, data) {
		page.processed = true;

		if (err) {
			console.error(err);
		}
		else {
			page.data = data;
		}

		if (isProcessed()) {
			pages.forEach(function(page) {
				console.log(page.data);
			});
		}
	});
});

