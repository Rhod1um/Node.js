//inline scripting
console.log("hello") //logges til browser console
//det samme som vi gjorde sidste semester, ala hvor js fil blev inkluderet i html
//sidst gjorde vi sådan fordi js var frontend, client
//nu har vi js som server, backend, derfor kan vi ikke poste til browser fra der

setTimeout(() => {
    console.log("hello")
}, 1000)
//vercel skal have ting inline fordi det er serverless
//inline scripting er ok nu, men ikke i næste uge/fremover

//fetch welcomeMessage and show it in console.log
//anders bruger ikke async, await men bare then
//det er fordi så SKAL det ind i funktioner men det gider vi ikke for noget der bare skal
//køre en enkelt gang, samt async await er langt langt langsommere, næsten helt sekund
const url = "http://localhost:8080/welcomeMessage" //hele url bruges åbenbart ikke

fetch(url).then((response) => {  //generel fetch
    console.log(response);
    response.json().then((data) => {
    console.log(data);
    });
}); //copy paste det her i browser console, det er det samme der sker som her inde

fetch("/welcomeMessage?user=V")
.then((response) => response.json())
.then((result) => {
    const welcomeMessageHeader = document.getElementById("welcomeMessage")
    welcomeMessageHeader.innerText = result.message //message property i json
    //får { message: `welcome to my fancy website, ${clientName}`} fra backend
    console.log(result)
}) //copy paste det her i browser console, det er det samme der sker som her inde
//sidste funktion har adgang til repsonse pga closure
//nu bruger vi elementById fordi den traverser ét tre, mens query selector traverser 4 træer

//man kan skrive fetch("/welcomemessage") i browser konsol og så får man promise
//dette returnerer data med .then:
//fetch("/welcomemessage").then(console.log)
//hvorfor then med fetch:
//foregår over et netværk så man ved ikke hvornår det sker
//reposnse vi får: bytestream, sker måske over flere packets, readable stream er js bytestream
//se i objektet, står bytestream, det er ikke json, men vi vil konvertere det til json
//konvertere til json: fetch("/welcomemessage").then(response => response.json())
//får også promise fordi det tager tid at konvertere til json

fetch("/welcomeMessage?user=V")
.then((response) => response.json())
.then((result) => {
    const welcomeMessageHeader = document.getElementById("welcomeMessage");
    welcomeMessageHeader.innerText = result.data;
});