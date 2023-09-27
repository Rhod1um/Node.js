//pokeapi.co

//const express = require("express")
import express from "express"

const app = express()

app.use(express.static("public"))

//ved ikke at bruge comonJS module (require) kan vi ikke bruge __dirname
//gøres i stedet:
import path from "path"

import { randomIntFromInterval } from "./util/randomUtil.js" //husk skriv .js

//import og export er ens i front og backend - ret nyt at man kan importere her med fx express
//nu skal vi ikke bruge require fra nu af men import og export da det er nyere
//fordel ved at import og export er ens i front og backend er at man kan bruge samme filer
//i front og backend fx til validation, fx brugernavn/password, tester input fx alder, genbruger
//kode i front og backend, smart så man ikke skla ændre det flere steder 
//hvorfor teste fx alder både i front og backend, fordi frontend kan undgås

//vores root er vores package.json

//tre måder at importere vi gør ES module, "type": "module" nu før main i package.json



console.log(path.resolve("./")) //er relativ path, dog path resolve finder absolut path
//brubar ved forskellige operativsystemer
//../../ bruges når man kigger op i mappesystemet, mappenavn/mappenavn/... når man kigger ned

///=====HTML========


app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"))
    //res.sendFile(path.resolve("./public/frontpage.html")) begge giver absolutte sti
    //anders bruger ./ for det viser man er i samme mappe
    // ls . er symlink, symbolic link, samme med ..
    //når man sletter fil/mappe slettes linket, unlinker mappen og så garbage collectes det
})

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("./public/battle/battle.html"))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve("./public/contact/contact.html"))
})

//=========== routes =========

//her ville det være godt med en pre-fetch for nu så er den sløv til at hente ny pokemon når
//den kalder pokeapi, men hurtig til at skifte strength når man reflresher.
//når pokemon kun har 1 strength tilbage og vil dø efter næste reload kunne man fetche
//den nye pokemon på forhånd så der ikke er det ekstra sekund af load når den hentes

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

const PORT = 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))