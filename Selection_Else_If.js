//Write no. in words
const digit = prompt("Enter a number between 0 to 9 : ");

if (digit == 0) {
    console.log("Zero");
} else if (digit == 1) {
    console.log("One");
} else if (digit == 2) {
    console.log("Two");
} else if (digit == 3) {
    console.log("Three");
} else if (digit == 4) {
    console.log("Four");
} else if (digit == 5) {
    console.log("Five");
} else if (digit == 6) {
    console.log("Six");
} else if (digit == 7) {
    console.log("Seven");
} else if (digit == 8) {
    console.log("Eight");
} else if (digit == 9) {
    console.log("Nine");
} else {
    console.log("Please enter a number between 0 to 9");
}

//Display week
const number = prompt("Enter a number between 1 to 7 to display the week day : ");

if (number == 1) {
    console.log("It is Sunday...");
} else if (number == 2) {
    console.log("It is Monday...");
} else if (number == 3) {
    console.log("It is Tuesday...");
} else if (number == 4) {
    console.log("It is Wednesday...");
} else if (number == 5) {
    console.log("It is Thursday...");
} else if (number == 6) {
    console.log("It is Friday...");
} else if (number == 7) {
    console.log("It is Saturday...");
} else console.log("Invalid input!! There are only 7 days in a week");

//Display unit , Ten, Hundred, THousand
const number = prompt("Enter a number to know the place value in Indian System : ");

if (number == 1) {
    console.log("Units");
} else if (number == 10) {
    console.log("Tens");
} else if (number == 100) {
    console.log("Hundreds");
} else if (number == 1000) {
    console.log("Thousands");
} else if (number == 10000) {
    console.log("Ten Thousands");
} else if (number == 100000) {
    console.log("Lakhs");
} else if (number == 1000000) {
    console.log("Ten Lakhs");
} else if (number == 10000000) {
    console.log("Crores");
} else if (number == 100000000) {
    console.log("Ten Crores");
} else if (number == 1000000000) {
    console.log("Arab");
} else if (number == 10000000000) {
    console.log("Ten Arab");
} else console.log("Invalid input!!!");

//Arithmatic operation
console.log("Enter 3 numbers to perform arithmetic operations")
const num1 = prompt("Enter First Number : ");
const num2 = prompt("Enter Second Number : ");
const num3 = prompt("Enter Third Number : ");

let result1 = num1 + num2 * num3;
console.log(num1 + " + " + num2 + " * " + num3 + " = " + result1);

let result2 = num1 % num2 + num3;
console.log(num1 + " % " + num2 + " + " + num3 + " = " + result2);

let result3 = num3 + num1 / num2;
console.log(num3 + " + " + num1 + " / " + num2 + " = " + result3);

let result4 = num1 * num2 + num3;
console.log(num1 + " * " + num2 + " + " + num3 + " = " + result4);

// To get maximum number.
if ((result1 > result2) && (result1 > result3) && (result1 > result4)) {
    console.log(result1 + " is the maximum result.");
} else if ((result2 > result1) && (result2 > result3) && (result2 > result4)) {
    console.log(result2 + " is the maximum result.");
} else if ((result3 > result1) && (result3 > result2) && (result3 > result4)) {
    console.log(result3 + " is the maximum result.");
} else console.log(result4 + " is the maximum result.");


// To get minimum number.
if ((result1 < result2) && (result1 < result3) && (result1 < result4)) {
    console.log(result1 + " is the minimum result.");
} else if ((result2 < result1) && (result2 < result3) && (result2 < result4)) {
    console.log(result2 + " is the minimum result.");
} else if ((result3 < result1) && (result3 < result2) && (result3 < result4)) {
    console.log(result3 + " is the minimum result.");
} else console.log(result4 + " is the minimum result.");







