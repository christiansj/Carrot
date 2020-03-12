module.exports = `
    SELECT b.bookId, b.title, b.description, b.folderHash
    FROM Book b, User u, BookAuthor ba
    WHERE(
        u.userId = ba.authorId
        and b.bookId = ba.bookId
        and u.userId = ?
    );
`;