// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(result)

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

result2 = result.toFixed(2)
console.log(result2)
//console.log(result.toFixed(2)) - ændre ikke data i console.log

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avg = (one+two+three)/3
console.log(avg.toFixed(5))
//eller
//console.log(Math.avg(one,two,three).toFixed(5))


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"

const result3 = letters[2] //brug bracket notation frem for dot notation
const result4 = letters.charAt(2)

console.log(result3)

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const fact2 = fact.replace(/javascript/, "Javascript")

console.log(fact2)

// --------------------------------------

//forskel på json og js: json skal have key i "", skal js ikke/behøver ikke