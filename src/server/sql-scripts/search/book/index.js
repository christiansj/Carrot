module.exports = `
    SELECT bookId, title as dataName, imagePath, CONCAT('/', bookId, '-', title) as url
    FROM Book WHERE title LIKE CONCAT('%', ?, '%');
`;