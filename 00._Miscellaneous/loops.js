console.log("hello")

console.log(2+2)

//loop funktioner, *funktioner* her
//forEach, map, filter, find, sort, reduce

//vi bruger ikke reduce her. brug næsten altid map
//der skal være rigtig god årsag til at bruge forEach

//hvorfor bruger vi funktionel programmering:
//currying: er teknik i funktionel programmering:
//nested functions hvor hver funktion tager en parameter frem for en
//funktion der tager flere parametre

//side effect af funktionel prograamering (side effect computer science wiki)
//code smell - ting man skal undgå i kodning - marting fowler term
//en code smell er uncontrolled side effects

//her i loops vil vi gerne bruge map da den laver en ny liste. filter og find gør også
//i det her semester vil vi i høj grad bruge map
//det mindsker side effects at vi laver en ny liste og ikke modificere en gammel
//det er ikke ueffektivt for memory at lave en ny da den gamle garbage collectes


const trolls = [
    {name: "Krøllebølle", trollLevel: 8},
    {name: "Bobasine", trollLevel: 7},
    {name: "Krøllesine", trollLevel: 25},
]

//add 5 troll levels to all trolls

//slå dokumentation op på mdn - mozilla:
//mozillas docs er det bedste for at slå ting op for js

const changedTrolls = trolls.map((item) => item.trollLevel+=5)

console.log(changedTrolls) //giver kun trollLevel

//syntax ad map:
//trolls.map((element, index, array) => console.log())

const upgradedTrolls = trolls.map((troll) => {
    troll.trollLevel += 5
    return troll;  //husk return ellers opdatere den ikke men sender kun trolllevel
})
//når man har brugt map bruger man aldrig den gamle liste igen
//som default brug map, og sjældent forEach
//det er en side effect ikke at gøre det
console.log(upgradedTrolls) //giver 1,1,1 ved return 1

//Haskell fx, i fulde funktionelle sprog, alt er funktioner, der er der ingen side effects
//javascript er ikke et fuldt funktionelt sprog. Er inspieret af Lisp. Vi forsøger
//t gøre det funktionelt ved at bruge map og lave ny liste (?)

const doubleUpgradedTrolls = trolls.map((troll) => ({
    name: troll.name,
    trollLevel: troll.trollLevel + 5
}))
//der skal () om objektet ellers ses det som funktionskald
// er her curly braces et objekt, modsat i tidligere funktion er et funktionskald
//ingen return for den returnere jo bare objektet 
//

console.log(doubleUpgradedTrolls)

const oddTrolls = doubleUpgradedTrolls.filter((troll) => troll.trollLevel % 2 === 1)
//her bruger vi doubleUpgradedTrolls, vi bruger jo ikke den gamle array trolls når vi har lavet en ny

console.log(oddTrolls)

//side effect, fordi trolls er objekter så er det referencer og gammel array påvirkes
//derfor også når man ændre ny array - side effect, derfor brug altid ny array