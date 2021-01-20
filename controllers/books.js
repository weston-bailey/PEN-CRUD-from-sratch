const express = require('express')
const db = require('../models')
const router = express.Router()

// GET route READ all books and render
router.get('/', (req, res) => {
  res.send('render all books')
})

// GET /books/:id READ one book and associated genres render for add
// new genre
router.get('/:id', (req, res) => {
  res.send('details about book at id: ' + req.params.id)
})

// POST /books/:id add a genre to a book and redirect to /book/:id
router.post('/:id', (req, res) => {
  res.send('add genre to book at id:' + req.params.id)
})

module.exports = router