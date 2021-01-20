const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.use('/users', require('./controllers/users.js'))
app.use('/books', require('./controllers/books.js'))
app.use('/genres', require('./controllers/genres.js'))

const port = 3000
app.listen(port, () => {
  console.log(`is that port ${port} i hear?`)
})