//imports
const express = require("express")
const app = express() 

const mountains = []
mountains.push({id: 1, name: "Mount Everest"})
mountains.push({id: 2, name: "K2"})
mountains.push({id: 3, name: "Kilimanjaro"})
mountains.push({id: 4, name: "Hvannadalshnúkur"})
mountains.push({id: 5, name: "Himmelbjerget"})


app.get("/mountains", (req, res) =>{
    res.send({mountains})
})


app.get("/mountains/:id", (req, res) => {
    let id = parseInt(req.params.id)

    for (const mountain of mountains){
        if (mountain.id === id){
            res.send({mountain})
        }
    }
    res.send({message: `No mountain with id ${id}`})
})




app.listen(8080)