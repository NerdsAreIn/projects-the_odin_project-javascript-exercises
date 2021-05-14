function add (a, b, ...numbers) {
    let sum = a + b;
    for (let i = 0; i < numbers.length; i++) {
   	sum += numbers[i]; 
    }
return sum;
}

function subtract (a, b, ...numbers) {
    let difference = a - b;
    for (let i = 0; i < numbers.length; i++) {
   	difference -= numbers[i]; 
    }
return difference;
}

function sum(numbers) {
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i]; 
    }
return sum;
}

function multiply (a, b, ...numbers) {
 let product = a * b;
    for (let i = 0; i < numbers.length; i++) {
   product *= numbers[i]; 
    }
return product;
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
