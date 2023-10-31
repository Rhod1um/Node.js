//import dotenv from 'dotenv'
//dotenv.config()
//står i dokumentationen at det skal stå as early as possible
import "dotenv/config" //hackable måde at gøre det på, kalder config funktion
//config funktionen bliver automatisk kaldt når man importere det, derfor virker det på denne måde

import express from "express"
const app = express()

import helmet from 'helmet' //security bibliotek, sætter smarte headers
//fx mod SSR og click jacking -fx har usynlig iframe så man klikker på en anden hjemmeside, har været stort problem men er ikke så meget længere
// browsere er ops på det, cors er nu en ting, gør at brugere ikke interagere med anre origins så clickjacking ikke sker 
// session hijacking, henter anden persons session id fra script tag, hvis session id er exposed, keyboard cat, og lave request som om man er anden bruger. er ikke et problem længere, det var det gamle php som brugte md5
// session id er krypteret med den secret vi selv har lavet,
app.use(helmet())

import cors from 'cors'
app.use(cors({
    credentials: true,
    origin: true
})) //tillader cors for alt

import session from 'express-session'

//console.log(process.env.SESSION_SECRET) //viser at sessionsecret kan ses her
//det er allerede i gitignore at env skal ignoreres, standard ved node gitignores
//hvad hvis man kloner et repo og fejler fordi ingen .env med? 
//i virksomheder laver man sample, .env_sample eller .env_template (vilkårligt navn)
 ///laves som pushes. ved kloning sletter man "-sample". i den fil har man alle navnene på
 //env variabler så at de nyge brugere kender navnene. ellers aner de ikke navnene.
 //de har dog ikke values, kun SESSION_SECRET= 

//sætter session op, kopieret fra https://www.npmjs.com/package/express-session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET, //'keyboard cat',
  resave: false, //gemer ikke session objekt, ved true ved den lave nyt, false er bedst for hvis ma ikke har ændret værdier er der ikke grund til at resave
  saveUninitialized: true, //hvis der ikke er sessio, første gang man rammer route, første gang vclient kalder backend, skal den lave session
  cookie: { secure: false } // vigtigist, true gør at https bruges, den skal være false ellers virker det ikke her på localhost, men ved deployment så skal det ænres til true, den giver dog ikke fejl så svær at afkode
}))


//skal være fetr middleware

import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter)  //skal står efter session ting ovenover ellers virker det ikke
import coffeesRouter from "./routers/coffeesRouter.js"
app.use(coffeesRouter) 

const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))

// inspect - application - cookies - localhost, se cookie for vores session her 

// require("crypto")  tredje bibliotek vi imortere i node, kryptografiske metonder
// require("crypto").randomBytes(42)  giver Buffer af ranodm bytes,
// .toString på det giver unicode char værdier, så brug .toString("hex"), får string


//dotenv kræver at ma gemmer ting i fil som man ikke ønsker porten
//her gemmer man miljøvariabler

// lav .env fil i serveren, lav constant med egen generet session id