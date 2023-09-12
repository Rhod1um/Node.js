const express = require("express") //importere expresss

const app = express() //instantiere express

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
    const clientName = req.query.user

    if(! clientName) { //man skal have ! som første option, security principle, defaulter på NOT
        //principle of least privileged, fault tolerance, fail-safe default - sidste er navnet på det
        //18 principper cyber securtiry everybody must follow
        res.send({ message: "hello stranger"})
    } else {
        res.send({ message: `welcome to my fancy website, ${clientName}`})
    }

    //res.send({ message: "welcome to my fancy website"})
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