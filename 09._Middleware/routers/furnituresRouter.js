import { Router } from "express";
const router = Router();

router.get("/furnitures/chair", (req, res) => {
    res.send({ data: "Monobloc" });
});

router.get("/furnitures/lamp", (req, res) => {
    res.send({ data: "I like lamp" });
});

export default router;


//router tre ting, from express, instantier, export


//anders siger: besværligt med at prepende endpint, skriv hele endpoint i endpoint, ikke
//prepoing med fx "auth" andre steder app.use("auth", authRateLimiter) 
// for så skal man lede efter hele endpointet forskellige steder i forskellige filer