const express = require("express")
const app = express()

const mountains = [
    { id: 1, name: "Mount Fuji", height: 3776},
    {id: 2, name: "Kilimanjaro", height: 5895},
    {id: 5, name: "Himmelbjerget", height: 147}
]

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
        res.send( {error: "The mountain id must be a number"})
    } else {
        const foundMountain = mountains.find((mountain) => mountain.id === Number(req.params.id))
        //Number() gør det samme som parssInt()
        res.send({ data: foundMountain })
    }
})
//alt der kommer fra url er en string
//predicate er en arrow function callback den tager imod

//arrow functions i airbnb styleguide, (parameter) => parameteren er altid i ()



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
