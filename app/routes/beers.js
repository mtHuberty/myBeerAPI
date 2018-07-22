const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Got beers');
})

router.post('/', (req, res) => {
    console.log('Saved a beer');
})


module.exports = router