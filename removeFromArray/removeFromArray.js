const removeFromArray = function(testArray, ...toBeRemoved) {  
  for (let n = 0; n < testArray.length; ++n) {
    for (let i = 0; i < toBeRemoved.length; ++i) {
      if (toBeRemoved[i] === testArray[n]) {
        testArray.splice(n, 1);
      } else continue;
    }
  }
  return testArray;
}

module.exports = removeFromArray
