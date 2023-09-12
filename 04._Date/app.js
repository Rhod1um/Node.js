const express = require("express")
const app = express()

//det er de to øverste vi skal bruge til at løse opgaver

console.log(Date())      //Locale, tager hensyn til ens egen tidszone:
console.log(new Date())  //GMT 0, UTC 0 timezone er 0
console.log(Date.now())  //epoch timestamp, unix timestamp, fra 1970 1. jan, sekunder siden der

//i java er dato bibliotek rigtig dårligt, det er velkendt
//i js er det lidt bedre

//opgaver. Her må endpoint godt være hvad man har lyst til, behøver ikke være flertal

//jonathan spørger, kan man ikke have global: nej for så er dagen når serveren er startet
//const currentDate = new Date()

app.get("/currentDate", (req, res) => {
    const curentMonthName = new Date().toLocaleDateString('default', {month: 'long'})
    res.send({data: curentMonthName})
})

//når man starter serveren oprettes arrayet og så skal det alrig oprettes igen
//bedre end at month findes i en callback funktion for så gøres det hver gang clienten spørger
const monthNames = ["Jan", "Feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "nov"]

app.get("/currentMonth", (req, res) => {  
    res.send({ data: monthNames[new Date().getMonth()] })
})
//kopieret fra hans:
app.get("/monthversion2", (req, res) => {
    res.send({ data: monthNames[new Date().getMonth()]});
});

app.get("/monthversion3", (req, res) => {
    const date = Date().split(" ");
    res.send({ data: date[1] });
});

const weekdays = ["man", "tir", "ons", "tor", "fre", "lør", "søn"]

app.get("/currentDay", (req, res) => {

    //.getDay giver 2 for tirsdag, men starter på 0, fordi amaerikansk uge starter på søndag

    res.send({ data: weekdays[new Date().getDay()] })
})

console.log("opgave")
console.log(new Date().getMonth().toLocaleString())



const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log("Error er", error)
        return //return gør at den går ud af funktionen så det nedre console.log ikke udskrives
    }
    console.log("Server is running on port", PORT)
})