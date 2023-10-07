console.log(process.env.PORT)
//port skal sættes hver gang, ellers undefined
console.log(process.env)
//viser miljøvariabler, sig PORT=3000 node main.js så ses PORT som en del af miljøvariablerne
//ligesom da Anders viste det
//med process.env vises både OS miljøvariabler såsom PATH og programspecifikke såsom PORT

console.log(process)
//process er meta info om node 

//i pokemon server i package.json var der
//    "start:dev": "cross-env PORT=8080 nodemon app.js",
//cross-env blev installeret med npm i cross-env
//kunne ikke gøres i dette projekt fordi der ikke var en package.json. Så derfor npm init
//og derefter npm i cross-env
//i package.json ses nu "dependencies": {
//    "cross-env": "^7.0.3"
//}
//det blev added efter npm i cross-env

//Kør/invoke script med npm run [scriptkommando navn]

//husk, installer npm packages præcise navne. Jeg installerede crossenv og det er malware

//uden cross-env kan ku mac og linux køre kommandoerne. Cross-env gør at windows kan køre
//bash kommandoer

//husk npm run [scriptnavn] når start:dev køres