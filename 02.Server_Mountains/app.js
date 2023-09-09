//imports
const express = require("express")
const app = express()

app.use(express.json())

let mountains = [
    { id: 1, name: "Mauna Kea volcano" },
    { id: 2, name: "Roraima" },
    { id: 3, name: "Kilimanjaro" },
    { id: 4, name: "Hvannadalshnúkur" },
    { id: 5, name: "Himmelbjerget" },
    { id: 6, name: "Hoverla" },
    { id: 7, name: "nyt bjerg" }
]

let count = mountains.length

function addMountain(body) {
    count++
    const newMountain = { id: count, ...body }
    console.log(newMountain)
    mountains.push(newMountain)
    return newMountain
}

app.get("/", (req, res) => {
    res.send('Mountains API')
})

app.get("/mountains", (req, res) => {
    res.send({ mountains })
})


app.get("/mountains/:id", (req, res) => {
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

    //res.send(mountains.find(mountain => mountain.id === id))

    const mountainId = Number(req.params.id)
    if (!mountainId) {
        res.send({ error: "mountain id must be a number" })
    } else {
        const foundMountain = mountains.find((mountain) => mountain.id === mountainId)
        res.send({ data: foundMountain })
    }
})

app.post("/mountains", (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.send({ error: "Did you even send anything?" })
    } else if (!req.body['name']) {
        res.send({ error: "The mountain needs a name property" })
    } else if (Object.keys(req.body).length > 1) {
        res.send({ error: "The mountain should only have a name attribute" })
    } else {
        const mountain = addMountain(req.body)
        res.send(mountain)
    }
})

//HUSK, req.body får json sendt, req.params får variabler i URL
//huskeregel: body for et objekts body,  params som i spring boot: @RequestParams for path variabler
app.patch("/mountains/:id", (req, res) => {
    const mountainToBeUpdated = mountains.find((mountain) => mountain.id === Number(req.params.id))
    console.log(mountainToBeUpdated)

    if (mountainToBeUpdated) {
        if (req.body.name) {
            mountainToBeUpdated.name = req.body.name; 
        }
        res.send(mountainToBeUpdated);
    } else {
        res.send({ error: "No mountain with that id" });
    }
})


app.put("/mountains/:id", (req, res) => {
    const mountainToBeUpdated = mountains.find((mountain) => mountain.id === Number(req.params.id))

    if (Object.keys(req.body).length === 0) {
        res.send({ error: "Did you even send anything?" })
    } else if (!req.body['name']) {
        res.send({ error: "The mountain needs a name property" })
    } else if (Object.keys(req.body).length > 1) {
        res.send({ error: "The mountain should only have a name attribute" })
    } else {
        mountainToBeUpdated.name = req.body.name
        res.send(mountainToBeUpdated)
    }


    const updatedMountain = req.body

    const id = req.body.id
    console.log(updatedMountain)
    mountains.splice(id, 1, req.body)
    console.log(mountains)
})


/*app.patch("/mountains/:id", (req, res) => {
    const changedMountain = req.body

    if(req.body['name']){
        const mountain = mountains.find((mountain = (mountain) => mountain.id === Number(req.body.id)) => mountain["name"] = req.body.name)
        console.log(mountain)
        console.log(mountains)

    }

    const id = req.body.id
    console.log(changedMountain)
    mountains.splice(id, 1, req.body)
    console.log(mountains)
})*/


app.delete("/mountains/:id", (req, res) => {
    const mountainToBeRemoved = mountains.find((mountain) => mountain.id === Number(req.params.id))

    if (mountainToBeRemoved) {
        //filter laver ny array, gøres for at mindske side effects
        //ny array assignes til gamle arrays navn, gammel array er ny inaccessible - garbage collectes
        //mountains array skal dog instantieres med let og ikke const for dette
        mountains = mountains.filter(mountain => mountain.id !== Number(req.params.id))
        res.send(mountainToBeRemoved)
    } else {
        res.send({error: "No mountain with that id"})
    }
})


//app.listen(8080)
const PORT = 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error er", error)
        return
    }
    console.log("Server is running on port", PORT)
})