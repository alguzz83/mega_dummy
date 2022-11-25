require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const helmet = require('helmet')
const {dbConnect} = require('./config/mongo')
const PORT  = process.env.PORT || 3000
const bodyparser =require('body-parser')

app.use(cors())
app.use(express.json())
app.use('/mega/api1.0',require('./app/routes'))
app.use(helmet())
app.use(bodyparser.json())

dbConnect()
app.listen(PORT,() => {
    console.log('API lista por el puerto', PORT)
})

module.exports = app;