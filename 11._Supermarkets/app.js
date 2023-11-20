import express from 'express'

const app = express()
app.use(express.json())

//når man pusher databaser her så put dem i gitignore hvis man ikke vil lægge det op
//det er ok at pushe det nu, men tænk over det
import supermarketsRouter from "./routers/supermarketsRouter.js"
app.use(supermarketsRouter)



const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => console.log("Server is running on port", PORT))