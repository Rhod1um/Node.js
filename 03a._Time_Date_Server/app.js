const express = require("express")
const app = express()

app.get("/", (req, res) => {
    
    res.sendFile( __dirname + "/public/index.html" )
})

app.get("/data", (req, res) => {
    
    res.send({ data: "data"})
})

app.get("/secondPage", (req, res) => {
    
    res.sendFile( __dirname + "/public/secondPage.html" )
})




const PORT = 8080
app.listen(PORT, (error) => {
    if(error){
        console.log("failed", error)
    } else {
        console.log("server is running on ", PORT)
    }
})

module.exports = app  //referere til const app = express() i start. Sikkert konvention at
//express kaldes app?