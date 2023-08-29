// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

function isFound(elementInEachArraySpace){ //kaldes for hver plads i array'et indtil
    return elementInEachArraySpace === "b" //den returnere boolean false
} 

console.log(letters[1])
console.log(letters.find((element) => element === "b"))
console.log(letters.find(isFound)) //find er en callback funktion der itererer gennem array'et
//hvis der var flere b'er stopper den ved det første

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push(
    {name: 'Anna'},
    {name: "beatrice"},
    {name: "Gitte"}
)
console.log(friends)

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

//significantMathNumbers.at(1729), .at og charAt er på strings ikke arrays

console.log(significantMathNumbers.indexOf(1729))
//console.log(significantMathNumbers.findIndex(callbackfunktion))
//indexOf tager enkelt værdi mens findIndex tager callback funktion hvor søgning kan
//gøres mere specifik, fx kan funktionen bestemme hvor mange gange den skal finde det
//bestemte søgeværdi hvis den finder sted flere gange


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between 
// the elements cucumber and rocket

diet.splice(diet.indexOf("Cucumber"), 0, 
    "hamburger", "soda", "pizza"
)
//.splice sætter arrays sammen eller deler dem op 
//første nummer er startindex, andet er nummer indexer som skal slettes, tredje er indsættede værdier

console.log(diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()

console.log(diet)

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

newDiet = diet.map((element) => element)

console.log("New diet", newDiet)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (let i = 1; i < lettersExpanded.length; i += 2) {
    console.log(lettersExpanded[i]);
  }

let index = 0;
for (const letter of lettersExpanded) {
  if (index % 2 === 1) {
    console.log(letter);
  }
  index++;
}


// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 6 || numbers[i] < 0) {
      console.log(numbers[i]);
    } else {
      discardedNumbers.push(numbers[i]);
    }
  }
  
  console.log("Discarded numbers:", discardedNumbers);

// --------------------------------------