// parameters: Id of book
const getABooksAuthors =`
SELECT u.userId, u.firstName, u.lastName, u.email
FROM Book b, User u, BookAuthor ba
 WHERE(
     b.bookId = ba.bookId
     and u.userId = ba.authorId
     and b.bookId = ?
 );
 `;
module.exports = getABooksAuthors;