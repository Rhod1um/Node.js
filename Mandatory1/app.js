import express from "express"
import path from "path"
const app = express()
app.use(express.json()) //body parser til post, uden den sagde den at username i req.body.username var undefined
app.use(express.static("public"))


//========= Read pages ========

//lav html om til strings/prepare pages:
//templateEngine:
import fs from "fs"
//readPage:
const main = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString() //ses fra roden af, behøver der være . først?

//hver side gøres som ovenstående. navbar og footer er anderledes
//i renderPage skal hver side sættes sammen med navbar og footer og sat css og tabtitle
//så renderPage er en maskine som hver side skal igennem og blive klædt på. Navbar og footer er
//intet andet end vedhæng

//så nu har vi lavet main content om til string, så skal den dekoreres, den skal have navbar og 
//footer på. Er gjort. Den skal også have tabtitle og css på. $TAB_TITLE står der i <title>
// og $CSS_LINKS står der i html head, så det replaces med vores tabtitle og css link
//renderPage

const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
    .replace("$TAB_TITLE", "Mandatory 1" || "Mandatory 1")
    .replace("$CSS_LINKS", `<link rel="stylesheet" href="/pages/frontpage/frontpage.css">` || "")

const footer = fs.readFileSync("./public/components/footer/footer.html").toString()

//laver sandwich:
const frontpage = navbar + main + footer
//den tager ikke min css ind, er det fordi css'en kun påvirker navbaren, nej for water css påvirker det hele

app.get("/", (req, res) => {
    res.send(frontpage)
})

//========== admin ===========

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

//========== topics ===========

app.get("/create-node-server-with-express", (req, res) => {
    res.sendFile(path.resolve("./public/topics/create_node_server_with_express/create-node-server-with-express.html"))
})

app.get("/deployment-to-vercel", (req, res) => {
    res.sendFile(path.resolve("./public/topics/vercel_deployment/vercel-deployment.html"))
})







const PORT = Number(process.env.PORT) || 8080
app.listen(PORT, () => "App is running on port", PORT)