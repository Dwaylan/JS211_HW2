//uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

// the function that will be called by the unit test below

// ***Const are functions that DO NOT CHANGE. Think of them as 
// a set of rules that do not bend.***

// The function "rockPaperScissors" passes two arguments, "hand1" and "hand2", that
// will yield a set of results.
const rockPaperScissors = (hand1, hand2) => {
const tie = "It's a DRAW"
const hand1Wins = "Hand 1. VICTORIOUS!"
const hand2Wins = "Hand 2. VICTORIOUS!"
const error = "Error detected"


  // Write code here
  // Use the unit test to see what is expected

}
if (hand1 === hand2){
  return "It's a DRAW!";
  // If "hand1" is equal to "hand2" return "It's a DRAW"
}

if (hand1 === "rock"){
  if (hand2 === "scissors"){
    return "Hand 1. VICTORIOUS!";
  //  If "hand1" is equal to "rock" and "hand2" is equal to
  // scissors, return "Hand 2. VICTORIOUS"
  //  use same rules for lower

  } else if (hand2 === "paper") {
    return "Hand 2. VICTORIOUS!";
}
}

if (hand1 === "paper"){
if (hand2 === "rock"){
  return "Hand 1. VICTORIOUS!";
} else if (hand2 === "scissors") {
  return "Hand 2. VICTORIOUS!";
}
}

if (hand1 === "scissors"){
if (hand2 === "paper"){
    return "Hand one wins!";  
} else if (hand2 === "rock") {
    return "Hand 2. VICTORIOUS!";
  }
}

console.log(hand1)
console.log(hand2)

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
    console.log( rockPaperScissors(answer1, answer2) );
    getPrompt();
    });
});
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
    assert.equal(rockPaperScissors('rock', 'rock'), "It's a DRAW!");
    assert.equal(rockPaperScissors('paper', 'paper'), "It's a DRAW!");
    assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
    assert.equal(rockPaperScissors('rock', 'paper'), "Hand 2. VICTORIOUS!");
    assert.equal(rockPaperScissors('paper', 'scissors'), "Hand 2. VICTORIOUS!");
    assert.equal(rockPaperScissors('rock', 'scissors'), "Hand 1. VICTORIOUS!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
    assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand 2. VICTORIOUS!");
    assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand 2. VICTORIOUS!");
    assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand 1. VICTORIOUS!");
    });
});
} else {

  // always returns ask the user for another input
getPrompt();

}