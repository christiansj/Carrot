module.exports = `
    UPDATE Book
    SET folderHash = ?
    WHERE bookId = ?;
`