//starter med imports
const express = require("express")
//i node_modules leder den efter mappen express, leder efter index.js dér, og expres.js i lib
//const express = require("./express"), virker ikke, der skal kun være navn, så leder den efter
//dependencies

const app = express() //instantiere express

app.use(express.json())
//gør at ser den json så parser det den selv ved POST. Den parser så selv body
//den kunne ikke poste i postman før dette, men nu kan den
//hvis man ikke har denne linje så mangler den body parser og hvad den får in er undefined
//.send() i en get laver selv json og js om hver vej, men ved POST skal man 
//bruge body parser

//const app = require("express")() //gøres i enkel linje, men gøres ikke fremover
//årsag ses senere

//console.log(express)
//i output ser man [Function: createApplication] {, skal instantieres^^

//console.log(app)

//app.listen(8080) - skal være i bunden af koden
//hvorfor bruge 8080, det er tomcat's default port, er udviklingsporten/developer for http
//alle servere køre på localhost

//porte
//80 Http
//443 httops
//8080 http developer port
//9090 developer for https

//når man køre server, "den hænger i terminalen", hang på engelsk, terminalcurser er passiv

//gå til localhost:8080 i browseren, man har adgang, siger Cannot GET /
//fordi der ikke er lavet get request til /

const otherData = 123

//lav get metode:, endpoint(i browser) og så callback
app.get("/", (req, res) => { //request handler
    res.send({data: "json skal tilbage pga rest api. other data:", otherData})
}) 
//send json tilbage pga rest api og alle kan forstå json
//husk at genstarte serveren ved hver ædring

//create a dog endpoint that returns woof

const dogSound = "woof"

app.get("/woof", (req, res) => {
    res.send({data: dogSound})
}) //giver dobbel, skal bare være {dogSound} da det allerede er dogSound:"woof"

//app er server instans
app.get("/dog", (req, res) => {
    res.send({dog: "woof"})
})
//man kan også skrive res.json, giver det samme, men er gammelt i express, i gamle dage satte res.json
//headers som res.send ikke gjorde. res.send gør det også nu, og er det man bruger
//res.send køre under the hood res.end(). Kalder man res.end() manuelt afsluttes connection

//med id: dog/1,     /dog = /dog/,   i spring: /dog/{id}, i js: /dog/:id
app.get("/dog/:id/:otherValue", (req, res) => {
    console.log(req.params.otherValue) //udksirver i terminalen path variabler, id: '1' ved req.params
    //req.params.specifik parameter
    res.send({dog: "meow"})
})
//"/dog/:id/:otherValue" for flere parametre efter hinanden
//req er request: path variabler i url

let balance = 100
app.get("/wallet/:withdrawalAmount", (req, res) => {
    const withdrawn = req.params.withdrawalAmount
    balance -= withdrawn

    if (balance < 0){
        balance += withdrawn
        res.send({message: "you can't withdraw, no money left"})
    } else {
        res.send({message: `you've withdrawn ${withdrawn}`})
    }
})
//{mountains} i curly brackets for at være valid json, inde i yderste curly brackets er liste af strings
//hvor bjerg er key og liste med bjerge er value


//ny, cat
//POST
//http://localhost:8080/cat?name=Napster&age=2.5
//http://localhost:8080/cat?name=Fibio&type=skodkat

app.get("/cat", (req, res) => {
    console.log(req.query) 
    res.send( {data: req.query} )
})
//req.query er et objekt, har key value pair

app.post("/giveMeTheBody", (req, res) => {
    console.log(req.body)
    res.send(req.body) //sender det man postede tilbage 
})
//det er express der gør at vi skriver http metoder sådan her lige her

app.listen(8080)