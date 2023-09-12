const express = require("express")
const app = express()

app.get("/", (req, res) => {
    
    res.send({ data: "some data" })
})



module.exports = app  //referere til const app = express() i start. Sikkert konvention at
//express kaldes app?