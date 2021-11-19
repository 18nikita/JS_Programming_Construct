//No. in word
const number = prompt("Enter a number between 0 to 9 : ");
 
 switch (Number(number)) {
     case 0:
         console.log("Zero");
         break;
     case 1:
         console.log("One");    
         break;
     case 2:
         console.log("Two");    
         break;
     case 3:
         console.log("Three");    
         break;
     case 4:
         console.log("Four");    
         break;
     case 5:
         console.log("Five");    
         break;
     case 6:
         console.log("Six");    
         break;
     case 7:
         console.log("Seven");    
         break;
     case 8:
         console.log("Eight");    
         break;
     case 9:
         console.log("Nine");    
         break;    
     default:
         console.log("Invalid input!!!")
         break;
 }

 //Display Week
 const number = prompt("Enter a number between 1 to 7 to display the week day : ");
 
 switch (Number(number)) {
     case 1:
         console.log("Sunday");    
         break;
     case 2:
         console.log("Monday");    
         break;
     case 3:
         console.log("Tuesday");    
         break;
     case 4:
         console.log("Wednesday");    
         break;
     case 5:
         console.log("Thursday");    
         break;
     case 6:
         console.log("Friday");    
         break;
     case 7:
         console.log("Saturday");    
         break;
     default:
         console.log("Invalid input!!! There are only 7 days in a week");
         break;    
 }

 //Read no. and display unit
 const number = prompt("Enter a number to know the place value in Indian System : ");
 
 switch (Number(number)) {
     case 1:
         console.log("Units")
         break;
     case 10:
         console.log("Tens");
         break;
     case 100:
         console.log("Hundreds");
         break;
     case 1000:
         console.log("Thousands");
         break;
     case 10000:
         console.log("Ten Thousands");
         break;
     case 100000:
         console.log("Lakhs");
         break;
     case 1000000:
         console.log("Ten Lakhs");
         break;
     case 10000000:
         console.log("Crores");
         break;
     case 100000000:
         console.log("Ten Crores");
         break; 
     case 1000000000:
         console.log("Arab");
         break; 
     case 10000000000:
         console.log("Ten Arab");
         break;
     default:
         console.log("Wrong inputs!!!")
         break;
 }

 //Unit Conversion
 const number = prompt(`Enter 1. Feet To Inch 2. Feet To Meter 3. Inch To Feet 4. Meter to Feet : `);
           
 const digit = prompt("Enter the length for conversion : ");
 
 switch (Number(number)) {
     case 1:
         let feetToInch = Number(digit) * 12;
         console.log("Feet to Inch : " +feetToInch);
         break;
     case 2:
         let feetToMeter = Number(digit) / 3.281;
         console.log("Feet to Meter : " +feetToMeter);
         break;
     case 3:
         let inchToFeet = Number(digit) / 12;
         console.log("Inch to Feet : " +inchToFeet);
         break;    
     case 4:
         let meterToFeet = Number(digit) * 3.281;
         console.log("Inch to Feet : " +meterToFeet);
         break
     default:
         console.log("You have entered the wrong options!!!");
         break;
 }