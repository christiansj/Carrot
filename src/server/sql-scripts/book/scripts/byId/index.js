module.exports = `
SELECT bookId, title, description, dateCreated, dateUpdated, ISBN, imagePath
    FROM Book
    WHERE bookId = ?;
`;