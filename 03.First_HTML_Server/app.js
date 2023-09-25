const express = require("express") //importere expresss

const app = express() //instantiere express

const welcomeMessageUtil = require("./util/welcomeMessageUtil.js")
//fil, ikke pakke, derfor path
//med require kan man undgå .js til sidst, vscode autocompleter med js, antager det er js
//hvis det ikke er js vil den lede efter json. Men skriv stadig hele navnet anbefaler anders

//i node er alle filer betragtet som moduler. Så der er pakker og alle filer er moduler

//importer kun det der skal bruges, er memory efficient

app.use(express.static("public"))
//serve css og js filer i home
//sikkerhedsfeature, de har adgang til html filen hvor de kunne ændre link til js og få adgang til
//alt muligt. 
//vi sender html ud med de her app.. nedenunder, og skal manuelt sige at public-mappen skal kunne ses
//også


//han laver ikke index filer. index har en bestemt mening, også i express. index overskriver hvad
//end man servede på slash app.get("/"... 
//browsere behøver ikke en index fil

//nu vil vi serve html filer

//route:
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html")
})
//brug sendFile når html skal sendes tilbage
//ved at bruge path "home.html" giver den fejl i browseren som siger den ikke har absolute path
//ved at bruge __dirname, husk slash efter

//route: funktion som implementerer en af http metoderne

//endppint er ikke case sesitive
app.get("/secondPage", (req, res) => {
    res.sendFile(__dirname + "/public/secondPage.html")
})

//========================
//fetch

app.get("/welcomeMessage", (req, res) => {
    const clientName = req.query.user //her fås query string ?user=V fra clienten/frontend
    const welcomeMessage = welcomeMessageUtil.getWelcomeMessage()
    res.send({ data: welcomeMessage })

    //res.send({ message: "welcome to my fancy website"})*/

})

//=========================


const PORT = 8080
app.listen(PORT, (error) => {
    if(error){
        console.log("failed", error)
    } else {
        console.log("server is running on ", PORT)
    }
})

// Export the Express API
module.exports = app;