const repeatString = function(testString, repCount) {
let result = "";
	if (repCount < 0) result = "ERROR";
        else if (testString == "") return result;
	for (let i = 1; i <=repCount; ++i) {
		result += testString;
	}
return result;
}
module.exports = repeatString
