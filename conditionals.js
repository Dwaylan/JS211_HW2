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
// We are console logging the convert to letter function which is typically
// console.log(convertToLetter)
// However we are passing in independent variables to see their converson
// so it should look like: console.log(convertToLetter([number]))
// The logged number entry will satisfy one of the "if" statements and a
// a corresponding letter grade will be logged in the terminal