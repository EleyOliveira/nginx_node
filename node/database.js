import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}).promise()

await createTable()

export async function getPeople() {  
    const [people] = await pool.query("SELECT * FROM people")
    return people     
}

async function createTable(){
    if (await existeTabela()) {
        return 
    } 
    const [result] = await pool.query("create table people(id int not null auto_increment, name varchar(255), primary key(id)) ")
}

async function existeTabela() {
    const [rows] = await pool.query("SELECT count(table_name) as total FROM information_schema.TABLES WHERE table_schema = 'nodedb' and table_name = 'people'")
    return (rows[0].total > 0) 
}

export async function createPeople(name) {
    const [result] = await pool.query("INSERT INTO people(name) VALUES (?)", [name])    
}