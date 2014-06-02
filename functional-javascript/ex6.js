function countWords(inputWords) {
	return inputWords.reduce(function(previousValue, currentValue, index, array) {
		previousValue[currentValue] = previousValue[currentValue] + 1 || 1;
		return previousValue;
	}, {});
}

module.exports = countWords;