const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /users READ all users and render with a new user form
router.get('/', (req, res) => {
  db.user.findAll()
  .then(users => {
    res.render('users/index.ejs', { users })
  })
})

// POST /users/new CREATE a new user and redirect to /users
router.post('/new', (req, res) => {
  console.log(req.body)
  db.user.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  .then(user => {
    res.redirect(`/users/${user.id}`)
  })
})

// GET /user/:id READ one user from request params render user's books
// a form to add a book
router.get('/:id', (req, res) => {
  db.user.findOne({
    where: {
      id: req.params.id
    },
    include: [db.book]
  })
  .then(user => {
    res.render('users/details.ejs', { user })
  })
})


module.exports = router