module.exports = `
    INSERT INTO User(firstName, lastName, username, email, password, creationDate)
    VALUES(?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
`;