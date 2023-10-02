const express = require("express") //importere expresss

const app = express() //instantiere express

const { getWelcomeMessage } = require("./util/welcomeMessageUtil.js");
//fil, ikke pakke, derfor path
//med require kan man undgå .js til sidst, vscode autocompleter med js, antager det er js
//hvis det ikke er js vil den lede efter json. Men skriv stadig hele navnet anbefaler anders

//i node er alle filer betragtet som moduler. Så der er pakker og alle filer er moduler

//importer kun det der skal bruges, er memory efficient

app.use(express.static("public"))
//serve css og js filer i home
//sikkerhedsfeature, de har adgang til html filen hvor de kunne ændre link til js og få adgang til
//alt muligt. 
//vi server html med de her app routes nedenunder, og skal manuelt sige at public-mappen skal kunne ses
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
    res.sendFile(__dirname + "/public/secondPage.html");
})

//========================
//fetch

//det var denne der ikke virkede sidste gang, virker nu?

app.get("/welcomeMessage", (req, res) => {
    //her fås query string ?user=V fra clienten/frontend, query string så ingen /:variable fordi ikke path variable
    const clientName = req.query.user
    const welcomeMessage = getWelcomeMessage(clientName)
    res.send({ data: welcomeMessage })
})


//=========================

//nu med server side redirection

app.get("/doorman/:key", (req, res) => {
    if (req.params.key === "sesameopenup") {
        //return res.send({ data: "You have provided the correct key" });
        return res.redirect("/welcomeMessage");
    }
    res.send({ data: "You have not provided the correct key" });
    //cannot set headers after they are sent to the client
    //sker fordi res.send sker efter det første res.send er gjort
    //hvis der stod return i øverste ville return stoppe funktionen
    //uden return vil koden køre videre og vil prøve at sende nr. 2 res.send
    //det er smart at bruge return specielt ved nestede if og databaser
    //vær konsistent og bare altid brug return
    //den siger noget med header fordi headerne er sat i første og kan ikke gøres igen
    //client-server mode, server kan kun give ét response
})



app.get("/proxyserver", (req, res) => {
    // task: request http://www.google.com
    //proxy server, redirecter til anden side og kaster response tilbage?
    //kan være ulovligt 
    //man kan fetche i front og backend, forskelligt, i backend er server client til anden server
    //chain af client server
    fetch("http://www.google.com")
        .then((response) => response.text())  //giver html, derfor text
        .then((result) => {
            res.send(result)
        })
})
//Anders':
app.get("/proxyserver2", (req, res) => {
    // task fetch http://www.google.com
    // task: Then serve it 
    // fetch("http://www.google.com")
    // .then((response) => response.text())
    // .then((result) => res.send(result));
    fetch("https://google.com")
    .then(response => response.arrayBuffer()) //response.arrayBuffer returneres og er buffer parameter i næste then
    .then(buffer => {
        const decoder = new TextDecoder('iso-8859-1');
        const text = decoder.decode(buffer);
        res.send(text);
    });
});

const PORT = 8080
app.listen(PORT, (error) => {
    if (error) {
        console.log("failed", error)
    } else {
        console.log("server is running on ", PORT)
    }
})

// Export the Express API
module.exports = app