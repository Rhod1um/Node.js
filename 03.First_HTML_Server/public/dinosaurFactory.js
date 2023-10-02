const extinctDinosaurs = ["velo", "tricera", "t-rex"]

export function getExtinctDinosaurs() {
    return extinctDinosaurs
}


export function addExtinctDinosaur(extinctDinosaur) {
    extinctDinosaurs.push(extinctDinosaur)
}

//før var der ikke default foran funktionerne og nedenunder hed export default, så exporteres alt
//nu vil vi kun tage enkelte funktioner ind, derfor ændret til dette
/*export {  //stadig objekter men key er samme som value
    getExtinctDinosaurs,
    addDinosaurs
}*/

//taget fra Anders' kode:
// export default {
//     getExtinctDinosaurs,
//     addExtinctDinosaur
// };

// export {
//     getExtinctDinosaurs,
//     addExtinctDinosaur
// };