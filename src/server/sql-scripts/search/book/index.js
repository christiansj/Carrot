module.exports = `
    SELECT bookId, title as dataName, folderHash, CONCAT('/', bookId, '-', title) as url
    FROM Book WHERE title LIKE CONCAT('%', ?, '%');
`;