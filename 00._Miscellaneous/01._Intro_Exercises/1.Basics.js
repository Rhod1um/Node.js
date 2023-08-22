// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif
console.log(`My first name is ${firstName} and my last name is ${lastName} `)
//eller
console.log("My first name is", firstName, "and my last name is", lastName)

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2

console.log(`year: ${parseInt(year) + number}`)
//brug parseInt() for at gøre en string til en Number
//eller
const result = Number(year) + number //dette kan kun gøres hvis year rent faktisk kan laves til Number
//modsat er parseInt en kommando, hvis tallet indeholder bogstaver vil den konvertere de første tal
console.log(`year: ${result}`)

const result2 = +year + number
//at sætte plus foran string konverterer det til Number
console.log(`year: ${result2}`)


// --------------------------------------