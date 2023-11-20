import sqlite3 from "sqlite3"
import { open } from "sqlite"

const connection = await open({
    filename: "supermarkets.sqlite", //sig .sqlite eller .db bagpå så folk kan se det er en db
    //behøves egentlig ikke
    driver: sqlite3.Database
})

console.log(connection)

export default connection

//hvis databasen eksistere vil den ikke overskrive, den vil connect
//eksistere den ikke bliver den lavet