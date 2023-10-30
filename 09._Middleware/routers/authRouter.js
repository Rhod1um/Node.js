import { Router } from "express";
const router = Router();

router.post("/auth/login", (req, res) => {
    res.send({});
});

router.post("/auth/signup", (req, res) => {
    res.send({});
});

export default router;
//lav default så de kan hedde hvad som helst, så i app.js hedder de fx authRouter
//så clasher ordet Router ike med anden Router navn