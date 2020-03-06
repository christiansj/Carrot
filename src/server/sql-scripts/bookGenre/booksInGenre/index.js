module.exports = `
    SELECT b.bookId, b.title, b.description, b.imagePath, b.ISBN 
    FROM Book b, Genre g, BookGenre bg
    WHERE bg.genreId = ?
    and bg.bookId = b.bookId
    and bg.genreId = g.genreId;
`;