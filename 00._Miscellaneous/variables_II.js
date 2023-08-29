"use strict"
//compiler fortæller fejl den ellers ikke ville gøre
//behøves ikke bruges, men her påpeger den global variabel

const argument = 123
//strit mode siger her at ordet argument ikke er tilladt i strict mode, samme med public

totalGlobalVariable = "Never EVER!!!! do this!!!"

console.log(totalGlobalVariable)
//global scope

//brug aldrig var

function anotherScope(){
    //function scope
}

{
    //block scope
}

{
    console.log("")
}
//hver scope har sin egen call stack og executable context

{
    var someVariable = true
    {
        var someVariable = false
    }
    console.log(someVariable) //er false fordi vi bruger var, og det er globalt, er ikke i blockscope
}

for (var i=0; i<= 5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1000) //funktion venter 1 sekond mellem loops
} //er et typisk interview spm i js
//giver 6 fordi den pludser 1++ når den når til 6
//giver 666666
//det er fordi var er global scope, gøres det til let er det 0-5

//const er ikke en konstant, kan ikke ændre værdi i memory, kan ikke redeclare
//er ikke emutable i forhold til værdien

//const isThisConstant, kan ikke gøres, skal initialiseres
//isThisConstant = 79 //kan ikke redeklares

const isThisConstant = []
isThisConstant.push(1,2,3) //const kan godt ændres, her med array
console.log(isThisConstant)

//typisk eksamensspm hvis det gør dårligt: "hvad er var", "hvad er const"
//let er samme scope som const, blockscope og kan redeklares og kan deklarere uden at initializere
const anotherConstant = {}
anotherConstant.valueChange=true
console.log(anotherConstant)

var test
var test //kan gøres to gange, kan man ikke med let, den sidste overskriver den første
//var går også over i andre js filer
