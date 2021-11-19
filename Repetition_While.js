// Power of two
const number = prompt('Enter the value of n: ');

let i = 0
while (i <= number) {
    let powerOf2 = Math.pow(2, i);
    if (powerOf2 <= 256) {
        console.log(powerOf2);
        i++;
    }
    else {
        break;
    }
}

//Flip Coin
let MAXCOUNT = 11;
let countHead = 0;
let countTail = 0;

while (true) {
    let randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber == 1) {
        console.log("Heads");
        countHead = countHead + 1;
    }
    else {
        console.log("Tails");
        countTail = countTail + 1;
    }

    if (countHead == 11 || countTail == 11) {
        break;
    }
}
console.log("Number of heads is: " + countHead);
console.log("Number of tails is: " + countTail);

//Game

let stake = prompt("Enter the stake amount: ");
let goal = prompt("Enter the desired amount: ");
let trials = prompt("Enter the number of trials to perform: ");

let bets = 0;
let wins = 0;
let i = 0;
let cash = stake;

while (i < trials) {
    while (cash > 0 && cash < goal) {
        bets = bets + 1;
        let toss = Math.floor(Math.random() * 2);
        if (toss == 0) {
            wins = wins + 1;
            cash = cash + 1;
            break;
        }
        else {
            cash = cash - 1;
            break;
        }
    }
    if (cash == goal) {
        console.log("Game over.");
    }
    i++;
}

console.log("Wins in total trials: " + wins);
console.log("Number of bets made: " + trials);