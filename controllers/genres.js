const express = require('express')
const db = require('../models')
const { route } = require('./users')
const router = express.Router()

// GET /genres READ all genres and render them
router.get('/', (req, res) => {
  res.send('render all genres')
})


// GET /genres/:id READ one genre at at the index and 
// render associated books and add book form
router.get('/:id', (req, res) => {
  res.send('render one genre at id: ' + req.params.id)
})

// POST /genre/id CREATE add a book to a genre and redirect to 
// genre/:id
router.post('/:id', (req, res) => {
  res.send('adding book to genre')
})

module.exports = router