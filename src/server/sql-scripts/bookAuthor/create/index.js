module.exports = `
    INSERT INTO BookAuthor(bookId, authorId)
    VALUES(?, ?);
`;