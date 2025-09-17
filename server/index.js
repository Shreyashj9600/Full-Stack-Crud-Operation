const express = require('express')
const dataBaseConnection = require('./dataBase')
const app = express()

//database connection
dataBaseConnection()

app.get('/' , (req,res) => {
    res.send('hello world !')
})

app.listen(8000, () => {
    console.log('port listening on 8000')
})