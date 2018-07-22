const express = require('express')
const mongoose = require('mongoose')
const app = express()
const beers = require('./app/routes/beers')

// Allow key/value pairs to be more than strings/arrays, and tell our server to parse json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Middleware example
app.use((req, res, next) => {
    console.log("Something's hitting me!")
    next()
})

app.use((req, res, next) => {
    console.log("What about me??")
    next()
})


// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our beer API! Try hitting the /api endpoint' })
})

// Advanced routes
const router = express.Router()

app.use('/api', router)

router.get('/', (req, res) => {
    res.json({ message: 'Great! Now checkout the /api/beers endpoint. You can view and modify data there.'})
})

router.use('/beers', beers)


const port = process.env.PORT || 9090
app.listen(9090)

console.log(`Listening for stuff on port ${port}`)