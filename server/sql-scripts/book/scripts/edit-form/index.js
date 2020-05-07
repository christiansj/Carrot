module.exports = `
    SELECT title, description, ISBN
    FROM Book
    WHERE bookId = ?
`;