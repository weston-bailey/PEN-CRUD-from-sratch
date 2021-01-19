# models

## tables/models
* users table
  * PK id, integer
  * first name, string
  * last name, string
  * booksId, integer
* books table
  * PK bookid, integer
  * title, string
  * author, string
* genre table
  * PK genreId, integer
  * name, string
* books_genre
  * PK, integer 
  * bookId, integer
  * genreId, integer

## associtions
one user can have many books
many books can have many genre

# Routes
GET /users -- show all users and add new user from
GET /users/:id -- show one user's favorite books
  * show add book form
POST /users/new -- CREATE user in the database redirect to /users

GET /books -- show all books
GET /books/:id -- show one book and associated genre
  * show form to add genre
POST /books/:id -- add a genre

GET /genre -- show all genra
GET /genra/:idx -- show one genre and all the books in it
  * show form to add book 
POST /genra/:id -- add a book




