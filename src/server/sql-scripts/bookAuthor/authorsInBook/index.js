module.exports = `
    SELECT u.userId, u.username, u.firstName, u.lastName
    FROM User u, Book b, BookAuthor ba
    WHERE(
        u.userId = ba.authorId
        and b.bookId = ba.bookId
        and b.bookId = ?
    );
`;