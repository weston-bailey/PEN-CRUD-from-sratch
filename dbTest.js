const db = require('./models')

// db.user.findOrCreate({
//   where: {
//     firstName: 'Weston',
//     lastName: 'Beston'
//   },
//   include: [db.book]
// })
// .then(([user, created]) => {
//   console.log(user)
//   db.book.findOrCreate({
//     where: {
//       title: 'a scanner darkly',
//       author: 'phillip k dick' 
//     }
//   }).then(([book, created]) => {
//     user.addBook(book)
//     .then(() => {
//       console.log(user)
//     })
//   })
// })

// db.user.findOne({
//   where: {
//     firstName: 'Weston'
//   },
//   include: [db.book]
// })
// .then(user => {
//   console.log(user.books)
// })

// db.book.findOrCreate({
//   where: {
//     title: 'the alchemist',
//     author: 'paul C'
//   }, 
//   include: [db.genre]
// })
// .then(([book, created]) => {
//   console.log(book)
//   db.genre.findOrCreate({ 
//     where: {
//       name: 'adventure'
//     }
//   })
//   .then(([genre, created]) => {
//     book.addGenre(genre)
//     .then(() => {
//       console.log('book', book)
//       console.log('genres', book.genres)
//     })
//   })
// })

db.genre.findOne({
  where: {
    name: 'adventure'
  },
  include: [db.book]
})
.then(genre => {
  console.log(genre.name)
  genre.books.forEach(book => {
    console.log(book)
  })
  process.exit()
})