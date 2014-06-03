process.stdin.on('data', function(buffer) {
	var arr = new Uint8Array(buffer);
	console.log(JSON.stringify(arr));
});
