import db from './connection.js'
//hedder db fordi vi eskportere den som defautl i connection.js
//det er denne linje som opretter db, fordi det er connection som opretter den

//brug exec på ddl da vi vil execute det
//db.exec

//const isDeleteMode = true

const isDeleteMode = process.argvc.findIndex((arg) => arg === "delete") !== -1 ? false : true
//har man ikke skrevet delete i kommando node databases/createDatabase.js delete  så er
//det ikke delete mode
//se package.json der er lavet script for det

console.log(process.arvgc.find((arg) => arg === "delete"))
//

if (isDeleteMode){
    await db.exec("DROP TABLE IF EXISTS supermarkets")
    await db.exec("DROP TABLE IF EXISTS customers")
}

// task: lav sql  til at lave supermarkets table

//følg konventioner, snake case, underscore, flertal i 

//forskelle i mysql og sqlite, er kun forskelle i ddl
//sqlite er der både int og Integer
//i mysql   AUTO_INCREMENT, sqlite AUTOINCREMENT

//vi behøver ikke CREATE DTABASE, det er gjort

//Check her med enum, meget sqlite måde at gøre det på
//ddl data definition language
db.exec(`
CREATE TABLE IF NOT EXISTS supermarkets 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT CHECK( name IN ('Netto', 'Rema 1000', 'Lidl')) NOT NULL,
    is_best_in_denmark BOOLEAN DEFAULT FALSE,
    location TEXT
);`)

db.exec(`
CREATE TABLE IF NOT EXISTS customers 
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    supermarket_id INTEGER,
    FOREIGN KEY (supermarket_id) REFERENCES supermarkets(id)
);`)

//seeding, putter data i db, admin password, seeding
//knex seeding, framework, 

//run til insert, DML, data manipulation language
//re delete mode true, dvs alt er slettet, skal den lave det på ny og ellers ikke
if (isDeleteMode) {
    await db.run("INSERT INTO supermarkets (name) VALUES ('Name');")
    await db.run("INSERT INTO supermarkets (name, is_best_in_denmark) VALUES ('Rema 1000', TRUE);")
    await db.run("INSERT INTO customers (name, supermarket_id) VALUES ('Anna', 2);")
}


//mac har sqlite3 på forhånd, så kan man sige sqlite3 supermarkets.sqlite og se tables
//vi andre kan også men skal installere det globalt, sqlite3 uden for node/npm er global
//command line program



// PORT=hhjj kommando setter env var
//PORT til sidst er argument
// node ... node er alias for hvor node er installeret
// node databases/createDatabase.js delete    tredje argument er delete
