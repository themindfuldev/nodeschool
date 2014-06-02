var i,
	args = process.argv.length,
	sum = 0;
for (i = 2; i < args; i++) {
	sum += +process.argv[i];
}
console.log(sum);