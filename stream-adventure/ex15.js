var combine = require('stream-combiner');
var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var through = require('through');

var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);

var unzip = zlib.createGunzip();

var parser = tar.Parse();

parser.on('entry', function(entry) {
    if (entry.type === 'File') {
		// MD5
	    var shasum = crypto.createHash('md5', { encoding: 'hex' });

		entry.on('data', function(d) {
		  shasum.update(d);
		});

		entry.on('end', function() {
			var md5 = shasum.digest('hex');
		    console.log(md5 + ' ' + entry.path);
		});
	}

});

combine(process.stdin,
		decipher,
		unzip,
		parser);

