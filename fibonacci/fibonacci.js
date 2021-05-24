const fibonacci = function(number) {
    let fibonacciSequence = [0, 1];
    for (let i = 2; i <= number; ++i) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
     } 
    console.log(fibonacciSequence);
    return fibonacciSequence[number];        
}


module.exports = fibonacci
