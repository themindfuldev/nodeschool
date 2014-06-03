var concat = require('concat-stream');

process.stdin.pipe(concat(write));

function write(body) {
	var str = body.toString();
	var buffer = new Buffer(str.length);

	for (var i = 0; i < str.length ; i++) {
		var currentChar = str.charAt(i);
		currentChar = currentChar === '.'? '!': currentChar;
		buffer.write(currentChar, i, 1);
	}

	console.log(buffer);
}

/*
process.stdin.on('data', function(buff) {
      for (var i = 0; i < buff.length; i++) {
        if (buff[i] === 0x2e) buff[i] = 0x21
      }
      console.log(buff);
    });
*/