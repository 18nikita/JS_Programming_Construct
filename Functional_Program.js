//Unit conversion celcius to farenmheit
function convert_CelsiustoFahreinheit(celsius) {
    degF = (9/5) * celsius + 32;
    console.log("Celsius to Fahreinheit conversion value is: " +degF);
}

function convert_FahreinheittoCelsius(fahreinheit) {
    degC = ( fahreinheit - 32 ) * ( 5 / 9 );
    console.log("Fahreinheit to Celsius conversion value is: " +degC);
}


let option = prompt("Enter option: 1. Celsius to Fahreinheit 2. Fahreinheit to Celsius : ");

switch(Number(option)) {

    case 1:
        let celsius = prompt('Enter the temperature range within 0°C to 100°C: ');
        if ( celsius >= 0 && celsius <= 100 ) {
            convert_CelsiustoFahreinheit(celsius);
        }       
        else {
            console.log("Temperature range exceeded!");
        }
        break;

    case 2:
        let fahreinheit = prompt('Enter the temperature range within 32°F to 212°F: ');
        if ( fahreinheit >= 32 && fahreinheit <= 212 ) {
            convert_FahreinheittoCelsius(fahreinheit);
        }       
        else {
            console.log("Temperature range exceeded!");
        }
        break;
    default:
        console.log("Wrong option!");
        break;
    }
            

    //Palindrome 
    function checkPalindrome(a) {
        let rem = 0;
        let rev = 0;
         while ( a > 0 ) {
             rem = a % 10;
             rev = rev * 10 + rem;
             a = Math.floor(a / 10);
         }
         
         if ( rev == b ) {
             return 0;
         }
         else {
             return 1;
         }
     }
     
     let a = prompt('Enter the first number: ');
     let b = prompt('Enter the second number: ');
    
     if (checkPalindrome(a) == 0) {
         console.log(a+ " and " +b + " are palindrome");  
     }
     else {
         console.log(a+ " and " +b + " are not palindrome");
     }

     //Check no. is palindrome 
     function checkPrime(num) {
        let flag = 0;
        for ( i = 2; i <= num / 2; i++ ) {
            ans = num % i;
            if ( ans == 0 ) {
                flag = 1;
            }
        }
        if ( flag == 1 ) {
            console.log(num + " is not prime.")
        }
        else {
            console.log(num + " is prime.")
        }
    }
    
    function checkPalindrome(num) { 
        while ( num > 0 ) {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
        num = rev;
        console.log("Palindrome of the entered number is: " +num);
    }
    
    function perform(num)
    {
        checkPrime(num);
        checkPalindrome(num);
        checkPrime(rev);
    }
    
    let num = prompt('Enter the number: ');
    let rem = 0;
    let rev = 0;