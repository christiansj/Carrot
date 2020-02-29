module.exports = `
    SELECT userId, username, creationDate, lastLoginDate, balance, firstName, lastName, role, email
    FROM User
    WHERE username = ?
`;