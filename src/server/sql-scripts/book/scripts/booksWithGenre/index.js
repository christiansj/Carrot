module.exports = `
    SELECT b.bookId, b.title, b.imagePath, u.firstName, u.lastName
    FROM Book b, BookAuthor ba, User u, Genre g, BookGenre bg
    WHERE(
        g.name = ?
        and b.bookId = bg.bookId
        and g.genreId = bg.genreId
        and b.bookId = ba.bookId
        and u.userId = ba.authorId
    );
`;