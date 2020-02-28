// parameters: Id of book
const getABooksAuthors =`
SELECT u.firstName, u.lastName FROM Book b, User u, BookAuthor ba
 WHERE(
     b.bookId = ba.bookId
     and u.userId = ba.authorId
     and b.bookId = ?
 );
 `;
module.exports = getABooksAuthors;