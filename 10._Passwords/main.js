import bcrypt from "bcrypt"

const saltRounds = 14

const plainTextPassword = "hunter123"

const hashedPasswordOutput = "$2b$14$fupDGGzX3j9rXHjfgW5ts.L1xrpFnd4P3HpDYtK.O/oPZ16ua2XMa" 
//kopieret fra terminal
//den bruger forskellige salt hver gang og den vil stadig være true ved compare
//førstedel er hashen andet er salt

const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)

console.log(hashedPassword)

const compareResult = await bcrypt.compare(plainTextPassword, hashedPasswordOutput)
console.log(compareResult)

//bcrypt er agnostisk, findes i mange sprog, også i python som modul

//hedder main.js fordi det ikke er en app

//$14 i hashen ser man antal rounds, $2b$14

//bcrypt er mest brugte på nettet

//kode over 50 eller 60 tegn der smides sidste cifre bare væk

// mange systemer kan ikke håndtere passwords over 10 tegn og giver dårlige fejl så svært
// at se hvad der er galt
// er reglerne for passwords for strikse bliver det nemmere at gætte passwordsne 

// tager hash fra bruger og hash fra db og compare

//.hash ved signin, .compare ved login 
//man må ikke have plain text i db, det er åbenlyst men alligevel ikke, virksomheder "snyder"
// pga lappeløsninger fx

//det her er alt man behøver til at passwords

//man kunne ogås lave en secret på hashen men unødvendig
