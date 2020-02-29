module.exports = `
    INSERT INTO Book(title, description, ISBN)
    VALUES(?, ?, ?, ?);
`;