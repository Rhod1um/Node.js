//starter med imports
const express = require("express")
//i node_modules leder den efter mappen express, leder efter index.js dér, og expres.js i lib
//const express = require("./express"), virker ikke, der skal kun være navn, så leder den efter
//dependencies

const app = express() //instantiere express

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

//lav get metode:, path og så callback
app.get("/", (req, res) => {
    res.send({data: "json skal tilbage pga rest api"})
})
//husk at genstarte serveren ved hver ædring



app.listen(8080)