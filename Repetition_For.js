//Power of two
const number = prompt("Enter a range to get power of 2 : ");

for (i = 0; i <= number; i++) {
    console.log(Math.pow(2, i));
}

//Harmonic no.

const number = prompt("Enter the value of n : ");
let sum = 0;

for (i = 1; i <= number; i++) {
    sum += 1 / i;
}
console.log("Harmonic value for the entered value is : " + sum);

//Prime number
const number = prompt("Enter a number to check whether it is prime or not: ")
let isPrime = true

if (number == 1) {
    console.log("1 is neither prime nor a composite number ")
}

for (i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
        isPrime = false
    }
}
if (isPrime) {
    console.log("Its' a prime number")
}
else {
    console.log("Its' not a prime number")
}

//Prime no. Range
const lowerNumber = prompt('Enter lower number: ')
const higherNumber = prompt('Enter higher number: ')

console.log("Prime numbers between entered range are: ")

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Factorial 
const number = prompt('Enter a number: ');
let fact = 1;

for (i = 2; i <= number; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number + " is " + fact);

//Prime factor
const number = prompt('Enter any number to print its prime factors: ')

let isPrime = 0;

for (i = 2; i <= number; i++) {
    if (number % i == 0) {
        isPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = 0;
            }
        }
        if (isPrime == 1) {
            console.log(i);
        }
    }
}