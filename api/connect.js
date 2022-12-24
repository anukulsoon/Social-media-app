import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"1234",
    database:"social"
    
})