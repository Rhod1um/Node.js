//pokeapi.co

//const express = require("express")
import express from "express"

const app = express()

app.use(express.static("public"))

//ved ikke at bruge comonJS module (require) kan vi ikke bruge __dirname
//gøres i stedet:
import path from "path" //bruges nu ikke længere fordi vi laver sandwich
//hvorfor bruges den ikke længere, før blev den brugt til path.resolve(path til html fil)
//først __dirname fordi commonJS modul og blev brugt fordi path er anderledes alt efter styresystem (backward, forward slash)
//så brugte vi path fordi ES modul, og bruges af samme årsag
//hvorfor bruger vi nu ikke path til paths'ne? 
//path.resolve gav os den absolutte url, helt tilbage til user folder? Det bruger vi ikke længere
//men hvorfor bruger vi kun relativ nu og hvorfor skulle vi bruge absolut før? 

import { randomIntFromInterval } from "./util/randomUtil.js" //husk skriv .js

console.log(process.env) //outputter node specifikke miljøvariabler 
//viser installation af nodemon
//vi vil definere env var for PORT variable
//dev con variabler, port alt efter dev eller production mode
//vil ikke have hardcoded, ellers skal man manuelt ændre den hver gang man pusher da det så er production og ellers dev

//import og export er ens i front og backend - ret nyt at man kan importere her med fx express
//nu skal vi ikke bruge require fra nu af men import og export da det er nyere
//fordel ved at import og export er ens i front og backend er at man kan bruge samme filer
//i front og backend fx til validation, fx brugernavn/password, tester input fx alder, genbruger
//kode i front og backend, smart så man ikke skal ændre det flere steder 
//hvorfor teste fx alder både i front og backend, fordi frontend kan omgås

//process er meta info om node 



//vores root er vores package.json

//tre måder at importere vi gør ES module, "type": "module" nu før main i package.json
//nej, type:module skal gøres for at man kan bruge ES modul standard


console.log(path.resolve("./")) //er relativ path, dog path resolve finder absolut path
//brubar ved forskellige operativsystemer
//../../ bruges når man kigger op i mappesystemet, mappenavn/mappenavn/... når man kigger ned

//======== read ========

import {frontpagePage, battlePage, contactPage } from "./util/preparePages.js" //hvorfor . i nogle og ikke andre

//preference om man vil lægge ovenståede i separat fil frem for at have det her
//nu ligger det i preparePages

//========== HTML =========
//er flyttet til preparePages

//=========== routes ===========

app.get("/", (req, res) => {
    //res.sendFile(path.resolve("./public/frontpage/frontpage.html"))
    //res.sendFile(path.resolve("./public/frontpage.html")) begge giver absolutte sti
    //anders bruger ./ for det viser man er i samme mappe
    // ls . er symlink, symbolic link, samme med ..
    //når man sletter fil/mappe slettes linket, unlinker mappen og så garbage collectes det

    //res.send("<h1>Hello</h1>")
    res.send(frontpagePage)  //sender fil i stedet for string, bedre men ikke det vi vil gøre - dette blev skrevet før ændringer i koden
    //hvis alt er en string kan vi lave en sandwich med nav, indhold og footer
    //så renderes siderne på serveren
})

app.get("/battle", (req, res) => {
    //res.sendFile(path.resolve("./public/battle/battle.html"))
    res.send(battlePage)
})

app.get("/contact", (req, res) => {
    //res.sendFile(path.resolve("./public/contact/contact.html"))
    res.send(contactPage)
})

//her ville det være godt med en pre-fetch for nu så er den sløv til at hente ny pokemon når
//den kalder pokeapi, men hurtig til at skifte strength når man reflresher.
//når pokemon kun har 1 strength tilbage og vil dø efter næste reload kunne man fetche
//den nye pokemon på forhånd så der ikke er det ekstra sekund af load når den hentes

//== Anders' battle game =======
/*
const pikachu = {
    url: "bla bla",
    name: "pikachu",
    strength: 7
}*/
//let currentPokemon = {...pikachu} //undgår at currentP er en reference, nu er det sit eget objekt

let currentPokemon

//parametre req, res skal være i den rækkefølge! Ellers fejl med res.send is not a function
app.get("/battlepokemon", (req, res) => {
    //vi laver pokemon spil, pokemon skal miste strenght hver gang man refresher
    //det her skal gøres i backend, ikke frontend for så kan brugeren ændre det
    //vi laver ny pokemon objekt her ud fra data vi får tilsendt så vi bruger færre
    //ressourcer på vores server. Send kun det brugeren har brug for
    //vi lægger meget kode her, ikke i andre filer for man skal kunne se det direkte
    //anders siger mange virksomheder har ting i alle mulige filer
    //vi er søde ved pokemon api her, vi requester kun til os selv og så sender vi til vores bruger
    if (!currentPokemon || currentPokemon.strength <= 1) {
        const randomPokemonId = randomIntFromInterval(1, 151)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then(((response) => {
            if (!response.ok) {
                throw new Error("Error getting a pokemon");
            }
            return response.json();
        }))
        .then((result) => {
            const name = result.name.charAt(0).toUpperCase() + result.name.slice(1);
            const imageURL = result.sprites.other.home.front_default;
            const strength = randomIntFromInterval(1, 10);

            currentPokemon = {
                name, 
                imageURL,
                strength
            };

            res.send({ data: currentPokemon });
        });
    }
    else {
        currentPokemon.strength--;
        res.send({ data: currentPokemon });
    }
})

//ny route for form contact

app.get("/contact", (req, res) => {
    //res.send({send: "data"})
    res.redirect("/frontpage") //send besked om at beskeden blev sendt fra backend så vi er sikre på den rent faktisk blev sendt
})


//console.log(process.env.PORT) process er meta info om node, env er env var for OS og program, PORT er specifik env var
//const PORT = 8080
//PORT = process.env.PORT ? Number(process.env.PORT) : 8080 //port til Number fordi anders synes det ser pænere u i terminalen, Number er gul, string er hvid. Det printes altid som string
// ^ ternary operator for at vise at det som koncept gør det samme som nedenunder
const PORT = Number(process.env.PORT) || 8080 //samme som ovenover konceptuelt 
app.listen(PORT, () => console.log("Server is running on port", PORT))

//at bruge symbolic or || kan javscript bruge til at lave simple conditional statements
//hvor hvis den første værdi er truthy bliver const dén, og hvis den er falsy så bruges
//default setback værdien. Her, hvis process.env.PORT er truthy sættes PORT i appen til det
//hvis den er falsy sættes PORT til default setback 8080
//dene syntax bruges ofte i configuration settings og er åbenbart helt normal javascript

/*========= SSR fordele ============

serverside fordele: hurtigere load, 
hvorfor vil virksomgeer gå efter serverside? SEO, webcrawlere
webcralere ser mange tomme sider som brugeren ser
for seo, webcrawlere skal se det hele med te samme
hydration: først serverside så cleint side rendering
webcrawlere vil fx ikke se clientside js filer
webcrawler vil kun se html
simple html sider hvor ting ikke sendes ud med js er ok men som vi gjorde før hvor navbar og footer blev sendt ud
med js ville ikke ses af webcrawlere da de ikke kan se js, ser der ville navbar og footer være ingenting
virksomheder vil sende ting ud med js og derfor skal de bruge serverside da de ellers ikke ses af webcrawlere

serverside rendering er kun tungt når den starter op, det er her siderne sættes sammen, og det er det
så serverside er ikke tungt, det er memory efficient

kan vise ting instantly 

tre fordele ved serverside:
seo, hurtig visning, memory efficient for browsere
*/