// Write a program that takes a single parameter from the CL, a number, and rolls that many six-sided dices.

// 
const terminalNum = process.argv[2];

//


// 
let randomNum = Math.floor((Math.random() * 6) + 1);
// console.log(randomNum);
let rolledNums = '';
// For loop to roll the dice 3x
for (let i = 0; i < terminalNum; i++) {
  if (i === 0) {

    // Because rolledNums was initially a string, that converted the +=... into a string as well.
    rolledNums += Math.floor((Math.random() * 6) + 1);
  } else {
    rolledNums += ', ' + Math.floor((Math.random() * 6) + 1);
  }

}


console.log(`Rolled ${terminalNum} dice: ${rolledNums}`);





