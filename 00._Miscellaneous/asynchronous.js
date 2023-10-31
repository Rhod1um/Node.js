/*
asynkrong kodning, hvorfor
js køre på en main thread, single threaded,

man kan spawne children i node, er over niveauet her

event loop som ticker og der kan kaldes funkitioner og kodetumper senere, så timeout laver et tick
efter et sekund hvis det er sat til et sekund

asynkron kode, hvorfor bruges det
fx ved api kald, når ting hentes over et netværk tager det tid, email (SMTP er buffered, konvertering til json er også en buffer)
buffers generelt, database - både at hente over et netværk samt at en db er asynkron i sig selv, hvis man kadte database synkron skulle den være færdig før en anden request kan ske
Cron job, udtales Kron job, er ikke helt asynkron, det er operativsystemniveau, linuxfiler, i node kan man dog også have cronjobs, bibliotek
filsystem, filer og mapper - læse og skrive til filer tager tid så vi skal kunne gøre andre ting imens det sker, readfileSync bruges i ét tilfælde og ellers altid readfileasync
frontend eventhandlers, callbackfunktion, er asykron ellers kunne man ikke bruge mus og keyboard samtidigt



asynkron kode:

solution 1: callback, sådan fungere npde, callback oven på callback på callback 
cons: callbacl hell - svært at forstå, pyramid of doom - det æstetiske
main() {
	aaaaa() {
		bbbbb() {

			ccccc() {
				// do something now
			}



async og await og promises er relativt for nyligt
promises kom i pakke som hed blue bird og blev så del af js
promises er syntaxis sugar for callbacks, det er ikke bedre end callbacks, gør det bare nemere at se
kan være i states: pending og fulfilled. Fulfilled kan være i states: resolved og rejected 
cons ved promises: ikke så læseligt, kan blive pyramid of doom, se nedenunder, mange .then og nye prommises gør det langt

async/await er syntaktisk sugar for promise, funktionelt det samme
pros ved promises/async await: mere læsbart

*/

//sådan kan ma lave sin egen promise
new Promise((resolve, reject) => {
    //resolve("Promise worked out")
    setTimeout(() => {
        //resolve("Promise worked out")
        //reject("rejeccted")
        //kan også gøres med try catch 
        try {
            throw Error //gør at vi kommer ind i catch, bare for at se den også
            resolve("Promise worked out")
        } catch {
            reject("rejected")
        }
    }, 3000)
})
.then(succeedMessage => console.log(succeedMessage)) //implicit at resolve gives videre til then
.catch(errorMessage => console.log(errorMessage))
//uden catch gav den fejl som sagde at rejected promise ikke blev fanget af catch


//task, lav promisified funktion, funktion som returnerer promise som enten skal resolves som
// godt eller rejected, med 2 sek timeout
//promisified funktion betyder den er rapped i en prommise, godt at bruge hvis man arbejder med en database der ikke supporter asynkront
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Something good") //simulerer fx login, noget der enten går godt eller dårligt
            } catch {
                reject("Something bad")
            }
        }, 2000) 
    })
    .then(succeedMessage => console.log(succeedMessage)) //det her sker så efterfølgende, så i then gik det godt med fx login, og hvis ikke komer man ind i catch
    .catch(errorMessage => console.log(errorMessage))
}
const promise = myPromise()
console.log(promise)  


//anders løsning:

function myPromiseAnders(){
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw "bad" //kan throwe hvad som helst
                resolve("good")
            }
            catch (errorMessage) {
               reject(errorMessage) 
            }
            resolve("something good") //handler man ikke promise udskriver den bare pending
        }, 2000)
    })
}

myPromiseAnders()
.then((message) => console.log("success", message)) //lav then på promisifed funktion
.catch((errorMessage) => console.log("bad", errorMessage)) //efter vi lavet try catch laver vi catch, 
//vi skal altså have try catch. hvis vi ikke har det og noget fejler i timeout'en, vil den ikke automatisk fange den i .catchen efter .then
// i java sker dette, fejl "ophobes" eller smides videre, men ikke i js, der skal vi lave catch dér hvor vi vil håndtere fejlen

console.log(myPromiseAnders)

// task, lav egen fetch funktion
//fetch er promisied funktion, 
function myFetch(URL, options={}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({
            json: new Promise((resolve, reject) => resolve({data: "Response"}))
        })
    }, 5000)
    })
}

myFetch("URL")
.then(response => response.json())
.then(result => console.log(result))

//const result = await myPromise()
// giver fel og siger SyntaxError: await is only valid in async functions and the top level bodies of modules
// kan løses med .mjs på filnavn  eller lave package.json i denne mappe



async function main() {
    const response = await myFetch()
    const result = await response.json()
    console.log(result)

}
//main()

//IIFE
(async function callMyPromise() {
    try {
        const result = await myPromise()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
    const result = await myPromise()
})()
//callMyPromise()

//async await er mere lækkert end promises men her skal man bruge try catch
//promises er bare at bruge then eller then og catch
//i mandatory 2 så vælg at bruge async/await eller then og så kun brug det 

// da han sagde async await var langsommere ed then er det fordi det er i en funktion, løsning IIFE: immedatly invoked function expression, udtalt iffy
//promises er ellers hurtigere uden funktionskald 

// problem med top level er problemet at bruge await uden async, i html SKAL await være viklet ind i async, behøves ikke i node
// top level, altså at det er den yderste funktion. problem kommer at at async/await kaldes inde i funktioner? 



async function handleAllPromises() {
    const result = await Promise.all([myFetch, myPromise]) //gives liste af promisified funktioner, fx laver flere databasekald samt skrive mail, 
    console.log(result)
}
handleAllPromises()
