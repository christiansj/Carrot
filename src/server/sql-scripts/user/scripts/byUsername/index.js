module.exports = `
    SELECT userId, username, createDate, lastLoginDate, balance, firstName, lastName, role, email
    FROM User
    WHERE username = ?
`;