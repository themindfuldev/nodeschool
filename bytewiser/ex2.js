var array = process.argv.slice(2);
var buffer = new Buffer(array);
console.log(buffer.toString('hex'));