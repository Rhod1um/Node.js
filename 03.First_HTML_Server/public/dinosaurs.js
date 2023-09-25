//modules.export er kun en node ting, her er i i frontend så det kender ikke til node
//hvordan importere vi i frontend
//første løsning: importere bare begge js filer i html filen ligesom vi gjorde i sidste semestre
//dårlig løsning for det er uoverskueligt ved flere js filer og rækkefølge betyder noget
//circular dependency, tre depedenies hvor de tre afhænger af hinanden
//andet problem, når js i html læses læses hele filen og lægges i memory før vi har brug
//for det, er unødvendigt og langsommere

//import dinosaurFactory from "./dinasaursFactory.js"  tager hele export
import { getExtinctDinosaurs } from "./dinosaurFactory.js"

function getDinoInfo(){
    const extinctDinosaurs = getExtinctDinosaurs()
    console.log(extinctDinosaurs)
    console.log(`There are ${extinctDinosaurs.length} extinct dinosaurs`)
    console.table(extinctDinosaurs)  //table viser array i pænt format, kunne også bare loope pg printe

}

getDinoInfo()

//skriv gode commit beskeder, anders anekdote:
//folk får nej til praktik og job fordi de deler github repos med uprofessionelle commit beskeder