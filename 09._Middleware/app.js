import express from "express"
const app = express()
import { rateLimit } from 'express-rate-limit'

console.log(rateLimit)

//noget galt hvis app.js er lang, middleware er i app, resten i sepearat router fil
//undtagen med middleware som kun tilhøre enkelt route, så skal den med over i routes fil
//app.get er route

//Anders vil have al middleware her og kun routere i routes filer

// begrænser antal gange man kan tilgå en side:
const allRoutesRateLimiter = rateLimit({ //er for alle, kopieret
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Use an external store for consistency across multiple server instances.
})
// draft-7 er nyt, non-standard header i http, standard måde at have rate limiting, måles i sekunder
// Apply the rate limiting middleware to all requests.

app.use(allRoutesRateLimiter) //sætter det op som middleware, bruges nu på alle endpoints

//^kopieret fra dokumentationen https://www.npmjs.com/package/express-rate-limit  <­---

const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5, 
    standardHeaders: 'draft-7', 
    legacyHeaders: false, 
})


app.use("/auth", authRateLimiter) //nu kun /auth endpoint som har denne rate limiter
//skal stå oven over get route ellers ses den ikke
// i postman vises det hvor mange forsøg man har tilbage
// oveskrides det gives 429: Too many requests
// middleware returnere repsonse med det samme, smart. Frem for at skulle hente ting fra db fx
// her med nodemon restartes antal forsøg dog hele tiden, men er ikke et problem i produktion

//der er ikke en get til /auth/login, derfor den gav 404 i browser
app.post("/auth/login", (req, res) => { //brug dette endpoint, auth
    res.send({})
})


function doorman(req, res, next) { //dette kan bruges i mandatory 2 authorisation
    if (req.params.secretPhrase === "SesameOpen") {
        next();
    } else {
        res.send({ data: "You do not have access" });
    }
}

app.get("/secretRoom/:secretPhrase", doorman, (req, res) => {
    res.send({ data: "You are now in the secret room" })
})

function ipLogger(req, res, next) {
    console.log("Ip log:", new Date(), req.ip);
    next()
}
//der er ikke love om ip log, det er legalt, man kan se hvor meget folk forsøger at logge ind, bots

//app.use(ipLogger)
app.use("/room", ipLogger) //gøres nu kun for room endpoints



//=========================================================================
//i js can man importere inde i funktioner og alle mulige steder
// smart med inde i funktion fordi så bruger man det kun når man bruger det

//importere dummy routers fra router filer og gør at de kan bruges her i vores server instans, app.use
import authRouter from "./routers/authRouter.js"
app.use(authRouter)
import furnitureRouter from "./routers/furnituresRouter.js"
app.use(furnitureRouter)
import roomsRouter from "./routers/roomsRouter.js"
app.use(roomsRouter)


app.get("*", (req, res) => {
    res.send("<h1>404 - Page Not Found</h1>")
})
//skriver man url i browser som er alt muligt mærkeligt så kommer de alle til denne fallbacl route
// denne skal stå til sidst, står den over andre vil denne kaldes på de endpoints da den kaldes på alt
// man kan også have wildcards inde i endpoints, room/*, room/:*. room/:roomnumber*

app.all("*", (req, res) => {
    res.status(404).send({ data: `Unsupported path ${req.path}`})
}) // hvorfor dette frem for den første, den første var for at vise princippet, denne er den brugte i timen

const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))

//router tre ting, from express, instantier, export

//anders siger: besværligt med at prepende endpint, skriv hele endpoint i endpoint, ikke
//prepoing med fx "auth" andre steder app.use("auth", authRateLimiter) 
// for så skal man lede efter hele endpointet forskellige steder i forskellige filer

//^ Vent nej, mente han ikke at man kunne lave en app.use("auth") som så implicit
//gav /auth/ i alle endpoints som så ikke er tydelig i selve routeren?
//dette har vel intet med app.use("auth", authRateLimiter) at gøre, da denne
// bare gør at authRateLimiter kun bruges på auth endpoints/endpoints som allerede har auth i sig?