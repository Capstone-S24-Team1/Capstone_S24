const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const caseRouter = require('./routes/case')
const searchRouter = require('./routes/search')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res, next) => {
    res.send("Hello World")
})

app.use('/case', caseRouter)
app.use('/search', searchRouter)

module.exports = app
