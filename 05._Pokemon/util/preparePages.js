import {readPage, renderPage} from "./templateEngine.js" //hvorfor . i nogel og ikke andre

//import fs from "fs" //infbggget i node står for filesystem, bruges så vi kan læse filer 
//og give navbar og footer i alle pages

//const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()  //readFile asynkron, giver fil. Her vil vi bruge den synkrone, vi vil læse filerne

//const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
//05._Pokemon/public/pages/frontpage/frontpage.html
//const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const frontpage = readPage("./public/pages/frontpage/frontpage.html")
export const frontpagePage = renderPage(frontpage, {
    tabTitle: "Pokemon | Welcome",
})

//før de sendes ud som content
//behøver ikke bruge callback her
//console.log(frontpage)  //er Buffer datatype, nu string fordi toString

const battle = readPage("./public/pages/battle/battle.html")
//const battlePage = navbar + battle + footer
export const battlePage = renderPage(battle, {
    tabTitle: "Pokemon | battle",
    cssLinks: `<link rel="stylesheet" href="/pages/battle/battle.css"`  //dette gøres én gang, når serveren starter, effektivt
})


const contact = readPage("./public/pages/contact/contact.html")
//const contactPage = navbar + contact + footer
export const contactPage = renderPage(contact)


//det her kan fjerne og have under util hvor det esporteres og inporeres her
//const frontpagePage = navbar + frontpage + footer