//pokeapi.co

//const express = require("express")
import express from "express"

const app = express()

app.use(express.static("public"))

//ved ikke at bruge comonJS module (require) kan vi ikke bruge __dirname
//gøres i stedet:
import path from "path"

//import og export er ens i front og backend - ret nyt at man kan importere her med fx express
//nu skal vi ikke bruge require fra nu af men import og export da det er nyere
//fordel ved at import og export er ens i front og backend er at man kan bruge samme filer
//i front og backend fx til validation, fx brugernavn/password, tester input fx alder, genbruger
//kode i front og backend, smart så man ikke skla ændre det flere steder 
//hvorfor teste fx alder både i front og backend, fordi frontend kan undgås

//vores root er vores package.json

//tre måder at importere vi gør ES module, "type": "module" nu før main i package.json

console.log(path.resolve("./")) //er relativ path, dog path resoolve finder absolut path
//brubar ved forskellige operativsystemer
//../../ bruges når man kigger op i mappesystemet, mappenavn/mappenavn/... når man kigger ned

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"))
    //res.sendFile(path.resolve("./public/frontpage.html")) begge giver absolutte sti
    //anders bruger ./ for det viser man er i samme mappe
    // ls . er symlink, symbolic link, samme med ..
    //når man sletter fil/mappe slettes linket, unlinker mappen og så garbage collectes det
})


const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))