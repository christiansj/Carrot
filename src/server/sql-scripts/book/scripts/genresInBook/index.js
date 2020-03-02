module.exports = `
    SELECT g.genreId, g.name
    FROM Genre g, BookGenre bg
    WHERE 
        g.genreId = bg.genreId
        and bg.bookId = ?;
`;