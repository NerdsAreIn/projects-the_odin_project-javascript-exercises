const reverseString = function(testString) {
	let reversedString = testString.split("").reverse().join("");
	return reversedString;
}

module.exports = reverseString

