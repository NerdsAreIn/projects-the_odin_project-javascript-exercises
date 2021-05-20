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

function multiply(numbers) {
let i = 0;
let product = numbers[i];
    for (i = 1; i < numbers.length; i++) {
   product *= numbers[i]; 
    }
return product;
}

function power(a, b) {
return a**b;	
}

// the factorial of a number is the product of all of the positive numbers up to and including that number. E.g., the factorial of 5 is 120 - i.e.,
5 x 4 x 3 x 2 x 1 = 120 
function factorial(number) {
	let result = number;
//  condition to deal with the strange case of 0, whose factorial is, counterintuitively, 1 
	if (number == 0) {
		result = 1;
	}
	while (number > 1) {
		result *= number - 1;
		number--;
        }
	return result;
}


module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
