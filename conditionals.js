'use strict'

// I want to create a function that takes in a numeric grade
// and returns the equivilent letter grade

function convertToLetter(grade){
    console.log("Input to my function",grade)

    //If the grade is greater than a 89, return an A
    if (grade > 89){
        return "A";
}

    //If the grade is greater than a 79, return a B
    if (grade > 79){
        return "B";
    }

    //If the grade is greater than a 74, return a 
    if (grade > 74){
        return "C";
    }

    if (grade > 69){
        return "D";
    }

    return "F"
}

console.log(convertToLetter(92));
console.log(convertToLetter(105));
console.log(convertToLetter(73));