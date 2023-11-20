//import dotenv from 'dotenv'
//dotenv.config()
// står i dokumentationen at dotenv skal stå as early as possible
import "dotenv/config.js" // hackable måde at gøre det på, kalder config funktion

import express from "express"
const app = express()

app.use(express.json())

//nyt:
import path from "path"
app.use(express.static(path.resolve("../client/dist")))
//gør kun dette for root, derfor 

//cors uninstalleres, npm uninstall cors, cors kode her er fjernet
//i client ved npm run build oprettes en dist mappe som indeholder en
//gør dette
//index.html og tilhørende js og css fil. Derfor server vi hele dist ovenover
// server svelte fra vores express server, undgår cors problemer
//nu er der kun én origin, frontend og backend serves fra samme port, 8080
//dette er en løsning på cors problemer. Den anden løsning er også fint 
//den anden løsning bliver brugt mere, clientside
//denne ssr løsning så hostes det fra samme sted. Virksomheder kan dog godt lide at
//have to forskellige 

// i praktik, vi skal vurdere om et problem er kritisk, skal jeg bruge tid på det
//hvor meget tid skal jeg bruge, skal jeg løse det selv
//mandatory 2 må køres videre på til eksamensprojekt
//ingen lektier efter næste uge, eksamensprojekt starter
//næste to gange handler om databaser, og så slut 

// vercel deployer rigtig nemt svelte, fordi det hele er i ét, (html, css, js)
//render har kun 1000 kald pr måned
//netlify har anders også prøvet, lidt mere besværlig
//også heroku men kun gratis ofr studerende

import helmet from "helmet" 
app.use(helmet())


import session from "express-session"
// sætter session op, kopieret fra https://www.npmjs.com/package/express-session
//app.set('trust proxy', 1) // trust first proxy - han har ikke denne med?
app.use(session({
  secret: process.env.SESSION_SECRET, //'keyboard cat', sættes nu til vores egen fra .env
  resave: false, // gemmer ikke session objekt, ved true ved den lave nyt, false er bedst for hvis ma ikke har ændret værdier er der ikke grund til at resave
  saveUninitialized: true, // hvis der ikke er session første gang man rammer route/første gang client kalder backend, skal den lave session
  cookie: { secure: false } // vigtigst, true gør at https bruges, den skal være false ellers virker 
}))


import usersRouter from "./routers/usersRouter.js"
app.use(usersRouter)
import coffeesRouter from "./routers/coffeesRouter.js"
app.use(coffeesRouter)
import coffeeLoversRouter from "./routers/coffeeLoversRouter.js"
app.use(coffeeLoversRouter)

//vigtig med /api/ i route nu så man ved hvor man kommer hen
app.get("*", (req, res) => {
  res.sendFile(path.resolve("*../client/dist/index.html"))
})
//Anders viser ikke noget som er en dårlig ide at bruge, han viser forskellige ting
//som alle er valide muligheder

const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))
