module.exports = `
    INSERT INTO Book(title, description, ISBN, dateCreated)
    VALUES(?, ?, ?, CURRENT_TIMESTAMP);
`;