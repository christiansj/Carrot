// parameters: Id of book
const booksInAuthor =`
SELECT b.bookId, b.title, b.title, b.folderHash, b.description
FROM Book b, User u, BookAuthor ba
 WHERE(
     b.bookId = ba.bookId
     and u.userId = ba.authorId
     and u.username = ?
 );
 `;
module.exports = booksInAuthor;