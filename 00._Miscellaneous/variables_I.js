const scheduledBreakTime = "09:27"
//regel: brug const så meget som muligt, lav den altid const fra start

let consoleLogCounter = 0

console.log("Let's take a break at : ", scheduledBreakTime)
//den outputter "at  :   09:27" fordi komma bruges^ frem for + ved concatinering
//dvs vi har defineret usynlige regler for mig selv, brug komma i conole log
//vi bruger , og ikke + for at undgå type coersion

consoleLogCounter ++

//datatyper:
//Number, String, Boolean, BigInteger, undefined, null, Object, Symbol
//Object: Object, Array, Date
//Funktion er en datakonstrukt ifølge anders

//type coersion
//2 + "2" = '22'  - type coersion

//How to make strings

console.log("This is the first ''' way")
console.log('This is the second """ way')
console.log(`This is the third ${1+2}rd ''' """ way ${scheduledBreakTime}

.`) //den her er milisekunder langsommere end de andre, 
//betyder noget her. Multiline string literal og template string, kan bruge ${}
consoleLogCounter += 3
