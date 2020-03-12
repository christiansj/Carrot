function booksInGenre(field) {
    if (!parseInt(field)) {
        return query("WHERE g.name = ?");
    }
    return query("WHERE bg.genreId = ?")
}

const query = (whereQuery) =>
`
    SELECT b.bookId, b.title, b.description, b.folderHash, b.ISBN 
    FROM Book b, Genre g, BookGenre bg
    ${whereQuery}
    and bg.bookId = b.bookId
    and bg.genreId = g.genreId;
`

module.exports = booksInGenre;