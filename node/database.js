import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}).promise()

export async function getPeople() {  
    const [people] = await pool.query("SELECT * FROM people")
    return people     
}

export async function createPeople(name) {
    const [result] = await pool.query("INSERT INTO people(name) VALUES (?)", [name])
    //const id = result.insertId
    //return getPerson(id)
}