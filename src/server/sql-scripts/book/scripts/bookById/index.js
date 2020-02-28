module.exports = `
SELECT bookId, title, description, dateCreated, dateUpdated, downloadCnt, ISBN, imagePath
    FROM Book
    WHERE bookId = ?;
`;