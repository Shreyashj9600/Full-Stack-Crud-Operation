const express = require('express')
const dataBaseConnection = require('./dataBase')
const app = express()
const bookRouter = require('./routes/book.router.js')
const cors = require('cors')

//database connection
dataBaseConnection()

app.use(express.json())
app.use(cors())

app.get('/' , (req,res) => {
    res.send('hello world !')
})

app.use('/book' , bookRouter)

app.listen(8000, () => {
    console.log('port listening on 8000')
})