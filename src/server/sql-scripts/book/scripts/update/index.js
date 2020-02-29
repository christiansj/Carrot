module.exports = `
    UPDATE Book
    SET title = ?, description = ?, ISBN = ?, dateUpdated = CURRENT_TIMESTAMP
    WHERE bookId = ?;
 `;
