import express from 'express'
import { getPeople, createPeople } from './database.js'

const app = express()
const port = 3000

app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', async(req, res) => {   
    await createPeople('Tereza Timeo')         
    const people = await getPeople()
    res.render('home', {people: people})        
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})