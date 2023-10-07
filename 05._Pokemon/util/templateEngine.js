import fs from "fs"

export function readPage(filePath){
    return fs.readFileSync(filePath).toString()
}

export function renderPage(page, config={}){ //siger config som default er objekt, så behves man ikke lægge noget ind i preparePages funktionskalds parametre
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()  //readFile asynkron, giver fil. Her vil vi bruge den synkrone, vi vil læse filerne
    .replace("$TAB_TITLE", config.tabTitle || "Pokemon") //servervside rendering, sender variabler til server og rendere det her
    // || siger hvi man ikke får noget så brug defautl her "Okemino"
    .replace("$CSS_LINKS", config.cssLinks || "")
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
    //laver sandwich
    return navbar + page + footer
}
//hver renderPage læser navbar, hvorfor ikke gøre det end gang, det er fordi vi replacer og påvirker
//scriptet så vi skal læse det ind hver gang