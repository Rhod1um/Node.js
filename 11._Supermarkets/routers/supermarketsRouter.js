import { Router } from "express" 
const router = Router()
import db from "../databases/connection.js"
//laver automatisk singleton

router.get("/api/supermarkets", async (req, res) => {
    //const supermarkets = await db.all("SELECT * FROM supermarkets;")
    const supermarkets = await db.all("SELECT name, location, is_best_in_denmark FROM supermarkets;")
    //brug all her for at få alle, run kan også bruges men er mere besværlig
    console.log(supermarkets)
    res.send({ data: supermarkets })
    //lad være med at sende id hvis det ikke er nødvendigt, kan også være hemmeligt
    //gælder også for virksomheder som ikke vil vise hvor store de er, id viser antal noget, customer
})

router.post("/api/supermarkets", async (req, res) => {
    console.log(req.body)
    //der er ikke nogen grund til at awaite hvis man ikke skal bruge resultatet til noget
    //men det bare skal sendes med det samme
    //const result = await db.run(`INSERT INTO supermarkets (name, location) VALUES ("${req.body.name}"), ("${req.body.location}");`)
    //preparestatement: 
    const result = await db.run(`INSERT INTO supermarkets (name, location) VALUES (?, ?);`,

    )

    res.send({ data: result.lastID })
    //når ddl er kørt er det kun run og all som bruges på sqlite
})

//vi har åbnet op for sql injection her, folk kan skrive whatever i req.body
// i java brugte vi preparestatement, er det samme i alle sprog


export default router 


//mysql her npm mysql2 side, tag noget kode ind
// npm i mysql2
//husk luk forbindelsen i mysql 

//mongoDb næste gang