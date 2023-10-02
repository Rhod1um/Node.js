const welcomeMessageJson = require("./welcomeMessage.json")
//tager jsonfilen ind

function getWelcomeMessage(clientName) {
    //const clientName = req.query.user //her fås query string ?user=V fra clienten/frontend. Gøres nu fra app.js

    if (!clientName) { //man skal have ! som første option, security principle, defaulter på NOT
        //principle of least privileged, fault tolerance, fail-safe default - sidste er navnet på det
        //18 principper cyber securtiry everybody must follow
        return welcomeMessageJson.noNameWelcomeMessage //er query string empty er den falsy her
    } else {
        return welcomeMessageJson.nameWelcomeMessage.replace("$clientName", clientName);
    }
    //res.send({ message: "welcome to my fancy website"})
}


//skal gøres for at denne fil kan importeres i app.js
//med name: man kan importere alt muligt 
module.exports = {
    //getWelcomeMessage: getWelcomeMessage,
    getWelcomeMessage,
    name: "Sebastian"
    //hvis key og value hedder det samme, som hedder det samme som funktionen, 
    //kan man bare skrive navnet og så er key automatisk det samme som funktionsnavnet
}