'use strict'

//We want all the checks to go together as one big "if" statement
// this implementation uses if/else statements to find what the letter is 

function convertToLetter(grade) {
    console.log("Input to my function",grade);

    let letter;

    if (grade >= 90) {
        letter = "A";
    } else if (grade >= 80) {
        letter = "B";
    } else if (grade >= 75) {
        letter = "C";
    } else if (grade >= 70) {
        letter = "D";
    } else {
        letter = "F"
    }

    return letter;

    }
