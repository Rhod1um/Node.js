import { Router } from "express"  // destructuring import
// import  Router  from "express/Router" - gør det samme dog virker det ikke med denne for anders
// man kan dog importere noget så det virker, i router folderen

// når man henter express kaldder den altid index.js, den peger på lib/express, express sætter så en masse op,
// ses i node module, mappe i router under node modules har index.js også express.js har route
// øverste import imporere det, nederste import peger på mappen
// se i node modules for at se hvordan ting virker, koden er ikke svær vi kunne have skrevet den selv

const router = Router()

router.use((req, res, next) => {
    req.specialString="meow"
    console.log(req.specialString)
    next()
})

// husk users i flertal fordi rest api, mapper konceptuelt til db
router.get("/users", (req, res) => {
    console.log(req.path, ":", req.session)
    console.log(process.env.SESSION_SECRET)
    console.log(req.specialString)  // special string kan ses her fordi det er lagt i req, samme gør sesion middleware, 
    //lægger ting i req, godt med mmiddleware kan tjekke om man. fx databasekald i middleware og så 
    //får man id og så har man allerede id i routes fordi det blev gjort i middleware. sådan session fungerer
    if (!req.session.nameOfUser){
        res.send({ data: `I don't know you` })
    } else {
        res.send({ data: `Your name is ${req.session.nameOfUser}` })
    }
})  // tjek om session er undefined, er den det har man sat det forkert op
// nu giver den I don't know you, det er fordi nodemon restarter hele tiden så
// session id er væk
// session lever i backend her, det er ret sikkert, eneste security issue er session hijacking
// connect.sid i browser er


router.get("/users/logout", (req, res) => {
    req.session.nameOfUser = undefined //sætter det til undefined uden at ødelægge session id
    delete req.session.nameOfUser

    req.session.destroy(() => {
        res.send({ data:"you are logged out" }) //sletter session, Anders kan bedst lide ovenover
    })
})


router.get("/users/:registeredUsername", (req, res) => { //self bør være post men vi vil nu gøre det i browser
    console.log(req.path, ":", req.session)
    req.session.nameOfUser = req.params.registeredUsername
    res.send({ data: `Your name ${req.params.registeredUsername} was stored in the session`})
})
// forskelige clienter på samme computer 
// da logout route var under denne så den logout som et navn og gik ind i ovenover route


export default router //default export kan kaldes hvad som helst

