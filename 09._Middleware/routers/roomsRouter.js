import {Router} from 'express'

const router = Router()

router.get("/test")

//console.log(express)
//i den ses Router som er anonym funktion, skal instantieres router=Router()

//router er en dummy route, man sætter ikke en server op, 

//det her er ikke crud så endpoints hedder hvad man vælger 

//funktioner er copy pasted fra app.js og app er ændret til router, så router.get
//express er her ikke

//anders kalder router her for dummy router fordi det ikke er en sever instans som app er,
//i app.js gør vi at routerene bruger app med app.use(RoomsRouter);

function butler(req, res, next) {
    console.log("Welcome to the mansion", req.ip)
    next() // skriv next i middleware så get kaldes bagefter. get er nu callback funktion
}

router.get("/room", butler, (req, res, next) => { //next er tredje og sidste parameter
    console.log("Room 1")
    next()
    //res.send("så")
    res.send({ data: "this is room 1" })
})
//next() gør at vi rammer næste endpoint, så room 1 udskrives ikke på siden, kun room 2
// next er rigtig brugbart fordu vi kan lave middleware
// er på servere,, middleware i express har sin konkrete definition
// køre kode før bestemt route, er i router stack
// butler er nu middleware, går man i dette endpoint vil den kalde butler først, kan kalde uendeligt mange
// funktioner. butler får samme parametre som get, req, res, next. 
// var det her hosted kunne vi gemme ip adresser
//flowet er at butler sker og så sker get funktionsbody 
//først var ipLogger efter butler nu er den rykket til app.use(ipLogger)
//hver gang vi bruger app.use bruger v middleware. Nu bruges den på alle routes implicit 

router.get("/room", (req, res, next) => {
    res.send({ data: "this is room 2" })
    next() //går videre til fallback *, er der ingen fallback giver den fejl
})
//send json selv med sådan simple strenge
//req og res skal være i den rækkefølge for hvis det byttes om er 
// res så requst og reg er response, så skal der stå reg.send
//husk rækkefølge baseret på at req kommer først fordi req request fra server først og så response

// har man flere endpoints der hedder det samme vil det første gælde og den næste kaldes ikke 
//rækkefølge er vigtig, og det er også derfor port skal stå til sidst

router.get("/room", (req, res, next) => {
    console.log("welcome to this exclusieve room")
    next()
}, (req, res, next) => { //inline middleware
    console.log("bhkjnlm")
})


export default router;