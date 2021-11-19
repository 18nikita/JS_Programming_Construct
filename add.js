let oneFoot = 12 ; 
let oneInch = 0.084; 
let result = 42 * oneInch;
console.log("42 inches is equal to :" + result + " feets");

let oneFoot1 = 0.305; 
let oneMeter = 3.37; 
let resultOne = ((60 * 40) * oneMeter);
console.log("60 feet * 40 feet value in meters is : " + resultOne);

let oneAcre = 43650;
let resultTwo = ((60 * 40)/oneAcre)* 25;
console.log("Area of 25 plots in acres is : " + resultTwo);

//random function
let a=Math.floor(Math.random() * 10);
console.log(a);

//Dice Number
let value = (Math.floor(Math.random() * 10) % 7); 
console.log("Random value for Dice is : " +value);

//add two dice

let value1 = (Math.floor(Math.random() * 10) % 7); 
console.log("Random value for Dice is : " +value1);

let value2 = (Math.floor(Math.random() * 10) % 7); 
console.log("Random value for Dice is : " +value2);

console.log("Addition of dice no. is  "+value1+value2);

//5 random 2 digit values 
let sum = 0;
for(let a = 1; a <= 5; a ++){

     let value3 = Math.floor(Math.random() * 100); 
     console.log("random value is :" +value3);
     sum += value3;
}
console.log("The sum of five random values is : " +sum);

