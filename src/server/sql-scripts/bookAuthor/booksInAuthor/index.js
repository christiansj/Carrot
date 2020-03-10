// parameters: Id of book
const booksInAuthor =`
SELECT b.title, b.description, b.imagePath
FROM Book b, User u, BookAuthor ba
 WHERE(
     b.bookId = ba.bookId
     and u.userId = ba.authorId
     and u.username = ?
 );
 `;
module.exports = booksInAuthor;