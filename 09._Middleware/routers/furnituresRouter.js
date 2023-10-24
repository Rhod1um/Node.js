import {Router} from "express"

const router = Router()

router.get("/chair", (req, res) => {
    res.semd({data: "monobloc"})
})

router.get("/lamp", (req, res) => {
    res.semd({data: "lamp"})
})

export default router


//router tre ting, from rxpress, instantier, export


//anders siger: besværilligt med at prepende endpint, skriv hele endpoint i endpoint, ikke
//prepoing med fx "auth" andre steder app.use("auth", authRateLimiter) 
// for så skal man lede efter hele endpointet forskellige steder i forskellige filer