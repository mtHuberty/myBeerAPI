const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Allow key/value pairs to be more than strings/arrays
app.use(express.urlencoded({ extended: true }))
// Tells our server to parse requests as json
app.use(express.json())

app.use((req, res, next) => {
    console.log("Something's hitting me!")
    next()
})

app.use((req, res, next) => {
    console.log("What about me??")
})



const port = process.env.PORT || 9090
app.listen(9090)

console.log(`Listening for stuff on port ${port}`)