import express from "express"
import path from "path"
const app = express()
app.use(express.static("public"))





const PORT = 8080
app.listen(PORT, () => "App is running on port", PORT)