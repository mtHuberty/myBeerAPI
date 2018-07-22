const express = require('express')
const router = express.Router()
const Beer = require('../models/beer')

// Routes that end in /beers
router.get('/', (req, res) => {
    Beer.find((err, beers) => {
        if (err) {
            res.status(400).send(err)
        }
        res.status(200).json(beers)
    })
    console.log('Got beers');
})

router.post('/', (req, res) => {
    let beer = new Beer()
    beer.name = req.body.name
    beer.rating = req.body.rating
    beer.save((err, document) => {
        if (err) {
            res.status(400).send(err)
        }
        res.status(200).send(`Beer posted!\n${document}`)
    })
    console.log('Saved a beer');
})


// Routes that end in /beers/beer_id
router.get('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if (err) {
            res.send(err)
        }
        res.json(beer)
    })
})

router.put('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if (err) {
            res.send(err)
        }
        
        beer.name = req.body.name
        beer.rating = req.body.rating

        beer.save((err, document) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(200).send(`Beer posted!\n${document}`)
        })
    })
})

router.delete('/:beer_id', (req, res) => {
    Beer.deleteOne({
        _id: req.params.beer_id
    }, (err) => {
        if (err) {
            res.send(err)
        }
        res.send('You successfully deleted beer: ' + req.params.beer_id)
    })
})

module.exports = router