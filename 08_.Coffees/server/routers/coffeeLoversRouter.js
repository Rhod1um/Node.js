import { Router, application } from "express" 

const router = Router()

//i express kan man sætte om capitalixation betyder noget i url 

//navn flertal
router.get("/coffeeLovers/api", (req, res) => {
    res.send({ data: req.session.coffeeLover })
})

//få variabel uden at ændre url, query string og body, path variabel kræver /:variabel
router.post("/coffeeLovers", (req, res) => {
    console.log(req.body) //req.body er undefined ford vi ikke passer json, husk app.use(express.json()) i app.js
    //husk at tjekke ting i postman før man laver avancerede ting i frontend 
    req.session.coffeeLover = req.body.coffeeLover
    res.send({ data: req.session.coffeeLover })
})



export default router 