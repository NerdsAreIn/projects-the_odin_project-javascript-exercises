let bottomNumber;
let topNumber;

const sumAll = function(firstNumber, secondNumber) {
    if (!(typeof firstNumber === "number") || !(typeof secondNumber === "number") || (firstNumber < 0 || secondNumber < 0)) {
return "ERROR";
   }
    else if (firstNumber < secondNumber) {
bottomNumber = firstNumber;
topNumber = secondNumber;
   } 
    else {
bottomNumber = secondNumber;
topNumber = firstNumber;
   }  
    let result = bottomNumber;
    for (let i = bottomNumber; i < topNumber; ++i) {
        bottomNumber = bottomNumber + 1;
        result += bottomNumber;
   }
    return result;
}

module.exports = sumAll

