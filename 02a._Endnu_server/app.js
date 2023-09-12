const express = require("express")
const app = express()

const mountains = [
    { id: 1, name: "Mount Fuji", height: 3776},
    {id: 2, name: "Kilimanjaro", height: 5895},
    {id: 5, name: "Himmelbjerget", height: 147}
]

let currentId = 3

app.get("/mountains", (req, res) => {
    res.send({data: mountains})
}) //curly braces i send() fordi vi sender altid json
//han laver generisk key som holder listen, det er sådan man gør generelt
//man behøver ikke mappe det, dto, men det ville man gøre hvis der var passwords der skulle fjernes fx
//man bruger generelt ikke dto i node
//i json ville name fx skulle være "name", men det gør send selv. Det er express som sørger for det
//uden data: mountains ville andre sprog ikke kunne parse den json,
//alt gør det bare sådan, data er key og hvad man får ud er value
//det han sagde med at json ikke kunne parses af andre sprog var hvis man kun havde (mountains)
//uden curly braces, for ja så er det jo javascript og ikke json
//han siger hvis man kaldte data mountains: mountains passer det ikke til én mountain og
//man skal huske om man kaldte det mountain: eller mountains og det er besværligt, så derfor
//brug generisk ord som data

app.get("/mountains/:id", (req, res) => {
    const pathVariableMountainId = Number(req.params.id)
    if (! pathVariableMountainId) { //er NaN hvis der ikke er et id der kan konverteres til tal
        res.status(404).send( {error: "The mountain id must be a number"}) //sender OK som default
        //bad request statuskode er langt mere seriøs, det her er en clientfejl hvor brugeren
        //har indtastet noget direkte i url eller postman som ikke giver mening
        //bad request er for malformed ting, malformed json
    } else {
        const foundMountain = mountains.find((mountain) => mountain.id === Number(req.params.id))
        //Number() gør det samme som parssInt()
        res.send({ data: foundMountain })
    }
})
//alt der kommer fra url er en string
//predicate er en arrow function callback den tager imod

//arrow functions i airbnb styleguide, (parameter) => parameteren er altid i ()

//hvad vi laver i klassen:
app.post("/mountains", (req, res) => {
    //ikke skriv alt dette i ét, test i løbet
    //siger den postet er undefined, mangler parser, står næstøverst
    const newMountain = req.body
    //der kommer to af samme id'er på første objekt der laves,løses med ++currentId
    //med currentId++ assgines variablen først og så inkrementeres id bagefter
    //ellers hav currentId++ på linjen før vairablen assignes
    //
    newMountain.id = ++currentId
    mountains.push(newMountain)
    res.send({ data: newMountain})
})

//spread operator 

const kidsPlaying = {
    havingFun: true,
    havingFun: false
}
const playGround = {
    area: 10.000
}
console.log(kidsPlaying)
//json: det key value pair der er sidst er det gældende, hvis key heder det samme, VIGTIGT
//med spread får man et nyt objekt, nyt objekt i memroy
//cosole.log(...kidsPlaying) fejl fordi det skal lægges i nyt objekt {}
console.log({...kidsPlaying, ...playGround})
//med spread, fordi json fjerner første overskrevne key, fjerner den gentagne keys i spreadede objekter


app.patch("/mountains/:id", (req, res) => {
    //find bruger reference til array, ændre eksisterende, det er godt her
    //let foundMountain = mountains.find((mountain) => mountain.id === Number(req.params.id))
    //gøres med findINdex alligevel:
    let foundMountain = mountains.findIndex((mountain) => mountain.id === Number(req.params.id))
    if (foundMountain === -1){
        res.status(404). send({error: "no mountain with that id"})
    } else{
        //mountains[foundIndex] = req.body dette overskriver hele objektet
        //mountains[foundIndex].id = Number(req.params.id)  vi mister original data her
        //vi skal hellere bruge spread operator ...
        //her gør det ikke noget at både gamle og nye keys er der fordi de nye overskriver gamle
        //fordi reg.body sættes på til sidst
        mountains[foundIndex] = {...mountains[foundIndex], ...req.body, id: Number(req.parans.id)}
        //id må ikke overskrives, derfor sættes den på til sidst
        //jonathans måde:
        //delete req.body.id, så sikre man at brugeren ikke kan ændre id  
        res.send({ data: mountains[foundIndex] }) 
        //han går på i effektivitet, men ellers gør det ikke noget hvordan man skriver det
    }

    res.send({})
})


app.delete("/mountains/:id", (req, res) => {
    //hvad man sender tilbage som response til delete er der ingen standard for

    //hvorfor bruge findIndex frem for find
    const foundIndex = mountains.findIndex((mountain) => mountain.id === Number(req.params.id))
    if (foundIndex === -1) { //findindex returnere -1 når den ikke finder noget
        res.status(404).send({error: "Could not find mountain by id"}) //sender OK som default
    } else {
        mountains.splice(foundIndex, 1) // fjerner ét bjerg på foundIndex
        //splice modificere eksisterende array
        //splice er meget mere effektivt end et loop, derfor splice og ikke filter
        //in memory er splice langt mere effektivt, heapen
        res.send({data: Number(req.params.id)}) //normal t bare at sende id tilbafe
    }
    
})
//delete kan løses med find og findIndex, findIndex finder index
//ved find skal man bruge to loops, både find objekt og index
//man spare de væk ved kun at bruge findIndex


//ekstra fordi vi er forvirrede over falsy, hvornår er datatype falsy
//falsy: false, 0, undefined, NaN, null, ""
const value = true 

if(value) {
    console.log("not falsy")
} else {
    console.log("falsy")
}


//app.listen(8080)  kan være port som variabel:
const PORT = 8080
app.listen(PORT, (error) => {
    if (error){
        console.log("Error er", error)
        return //return gør at den går ud af funktionen så det nedre console.log ikke udskrives
    }
    console.log("Server is running on port", PORT)
})
//hvilken datatype er error? undefined
//så her, hvis noget er undefined 
//error er undefined hvis der ikke er en error, så iffen er false hvis den er undefined

//man får mange fejl med at porten er i brug
