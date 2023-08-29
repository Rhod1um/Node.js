//imports
const express = require("express")
const app = express() 

const mountains = []
mountains.push({id: 1, name: "Mauna Kea volcano"})
mountains.push({id: 2, name: "Roraima"})
mountains.push({id: 3, name: "Kilimanjaro"})
mountains.push({id: 4, name: "Hvannadalshnúkur"})
mountains.push({id: 5, name: "Himmelbjerget"})
mountains.push({id: 5, name: "Hoverla"})


app.get("/mountains", (req, res) =>{
    res.send({mountains})
})


app.get("/mountains/:id", (req, res) => {
    let id = parseInt(req.params.id)
    /*
    første uoptimerede løsning:
    for (const mountain of mountains){
        if (mountain.id === id){
            res.send({mountain})
        }
    }
    res.send({message: `No mountain with id ${id}`})

    Loop ved brug af forEach:
    mountains.forEach((mountain) => {
        if (mountain.id === id) {
            res.send({mountain})
        }
      });
    giver anderledes json, hvor "mountain" er key og objektet er value
    frem for bare kun at få objekt som i de to andre
    */
   
    res.send(mountains.find(mountain => mountain.id === id))
})




app.listen(8080)