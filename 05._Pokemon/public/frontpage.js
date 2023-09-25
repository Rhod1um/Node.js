//oke api har ikke random pokemon endpint så det laver vi

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//kopieret fra anders codeshare: er for at lægge billede ind. vi bruger det dog
//ikke fordi det ikke er html vi får ud fra ${result.sprites.other.home.front_default}
//kunne det så ikke bruges på det img html element vi laver? 
function escapeHTML(string) {
    if (!string) return "";

    return string.replaceAll(`&`, "&amp;")
        .replaceAll(`>`, "&gt;")
        .replaceAll(`<`, "&lt;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`/`, "&#039;");
}

const randomPokeId = randomIntFromInterval(1, 151)  //151 antal gamle generation pokemon

// https://pokeapi.co/api/v2/pokemon/1   pikachu

//fetch a random pokemon and console.log it

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
    })
//Anders siger det var rodet, hav ny linje med punktum på den nye linje og hav
//ordentlig indeksering på linjerne

//hvad sker der i feth første linje, netværkskald, utp(?)
//får response som er bytestream, consolelog, kan se


//Anders vil skrive det kort men synes det er godt hvis man laver error håndtering:
fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokeId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("could not get pokemon")
        }
        return response.json() //return fordi arrow på flere linjer
    })
    .then((result) => {
        const nameHeader = document.getElementById("pokemon-name") //dette kunne stå som global
        //variabel, men gøres ikke pga globalt scope samt at den traversere DOM'en og ved global
        //gøres det når siden loades og gør siden langsommere
        nameHeader.innerText = result.name
        //vi bruger innerText og ikke innerHTML fordi cross site scripting
        //nameHeader.innerHTML = "<script>localStorage.getAllfetch('evilserver', {})</script>>"
        //anders egen kode til at purify html fjerne scripts:
        // https://codeshare.io/keanode

        const imageWrapperDiv = document.getElementById("image-wrapper");
        console.log(imageWrapperDiv)
        imageWrapperDiv.innerHTML = `
        <img src="${result.sprites.other.home.front_default}"/>
        `
        console.log(result)
        //han havde først brugt escapeHTML, hans egen kode, men result er ikke html så kan ikke bruges
    })

//procedural  kode læses linje for linje, html er meget procedural