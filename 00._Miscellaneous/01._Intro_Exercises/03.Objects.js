// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(myObj)

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const VObject = {
    name:"Veronica",
    age:26
}
console.log(VObject)

// --------------------------------------
// Exercise 3 - Add a property 

let stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true

console.log(stackOverflow)

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description

thisSong.about = "Just a tribute."

console.log(thisSong)

// --------------------------------------