
console.log(getRandomInt()) //udskvier 5 før funktionen
//hoisting, funktioner og variabler løftes p, er i call stack, bliver parses før filen læses


function getRandomInt(min, max){
    return Math.floor(Math.random()*(max+1-min)+min)
    //return 5
}

console.log(getRandomInt) //udskriver funktionsreferencen
console.log(getRandomInt()) //udskvier 5

const getRandomIntAnonymousfunction = function(min, max){ //anonym funktion
    return Math.floor(Math.random()*(max+1-min)+min)
}
const getRandomIntArrowFunction = (min, max) => 
    Math.floor(Math.random()*(max+1-min)+min)
 //der er en forskel på anonym og arrow funktion, gås ikke ind her, men brug arrow function
//arrow har ikke return eller {}

//callback funktion, er lidt imod sit navn
//er en reference til noget executable kode som er passed som arhument til noget andet kode
//den bliver ikke nødvendivis kaldt senere
//vigtige er at den er en funktion der gives videre som argument, muligvis med det formål at
//blive kaldt senere

//vi vil bruge callback funktion hver dag i dette semester
//til servere, definere callback så at clienter kan ...  kode eksekveres hver gang der laves request

function genericActionperformer(genericAction, name) {
    return genericAction(name)
    //smart, action og name er dynamisk, skal ikke lave nu funktion hver gang
} //return blev tilføjet

const jump = (name) => `${name} is jumping`

console.log(genericActionperformer(jump, "Lasse"))
// passer funktion til genericActionperformer uden parantes så de kun kaldes når man aktiverer den
//fordi den returnere den passede funktion så er det som at kalde den direkte
//jump bruges som en callback funktion her, da den sendes videre og er en reference til noget
//executable kode som passes til noget andet executable kode
//const jump indeholder den anonume funktion

//ASI - automatic emo-colon insertion, så Anders er ligeglad med om man bruger semi-kolon
//Bare vær konsistent 
//Anders bruger semikolon fordi det er pædagoisk at man kan se hvad der er statement og hvad der ikke er

//const run = function(name) {return `${name} is running`} samme men anonym
//desired result: Jonathan is running

console.log(genericActionperformer(run, "Jonathan"))
//samme funktion her som med jump

function run(name){ //samme med named funktion
    return `${name} is running`
}
//brug ikke anonym, alt kan gøres med named og arrow funktion

//gøres på en enkelt linje:
console.log(genericActionperformer((name)=>`${name} is sleeping`, "Daniel"))
//genericActionperformer(funktion, name), funktion: (name)=>`${name} is sleeping`, name: "Daniel"
//polymorfisk, vi får handlinger dynamisk
//giver rigtig mange muligheder
