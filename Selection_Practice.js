//1. Minimum & maximum Value
let a = Math.floor(Math.random() * 900 + 100);
let b = Math.floor(Math.random() * 900 + 100);
let c = Math.floor(Math.random() * 900 + 100);
let d = Math.floor(Math.random() * 900 + 100);
let f = Math.floor(Math.random() * 900 + 100);
console.log("Random values are  :" + a + " " + b + " " + c + " " + d + " " + f);
if (a > b && a > c && a > d && a > f) {
    console.log("Maximum Value :" + a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log("Maximum Value :" + b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log("Maximum Value :" + c);
}
else if (d > a && d > c && d > b && d > f) {
    console.log("Maximum Value :" + d);
}
else {
    console.log("Maximum Value :" + f);
}


if (a < b && a < c && a < d && a < f) {
    console.log("Minimum Value :" + a);
}
else if (b < a && b < c && b < d && b < f) {
    console.log("Minimum Value :" + b);
}
else if (c < a && c < b && c < d && c < f) {
    console.log("Minimum Value :" + c);
}
else if (d < a && d < c && d < b && d < f) {
    console.log("Minimum Value :" + d);
}
else {
    console.log("Minimum Value :" + f);
}

// Leap Year
const year = 2021;
checkLeapYear(year);
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

//FlipCoin
const HEAD = 0;
let Toss = Math.floor(Math.random() * 10) % 2;
if (Toss == HEAD)
    console.log("Heads");
else
    console.log("Tails");

