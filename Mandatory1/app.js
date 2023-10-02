import express from "express"
import path from "path"
const app = express()
app.use(express.json()) //body parser til post, uden den sagde den at username i req.body.username var undefined
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"))
})

//==========admin===========

app.get("/admin-login", (req, res) => {
    res.sendFile(path.resolve("./public/admin-login/admin-login.html"))
})

app.post("/admin-login", (req, res) => {
    const username = req.body.username
    res.redirect('/admin')
})

app.get("/admin", (req, res) => {
    res.sendFile(path.resolve("./public/admin/admin.html"))
})

//==========topics===========

app.get("/create-node-server-with-express", (req, res) => {
    res.sendFile(path.resolve("./public/topics/create_node_server_with_express/create-node-server-with-express.html"))
})

app.get("/deployment-to-vercel", (req, res) => {
    res.sendFile(path.resolve("./public/topics/vercel_deployment/vercel-deployment.html"))
})







const PORT = 8080
app.listen(PORT, () => "App is running on port", PORT)