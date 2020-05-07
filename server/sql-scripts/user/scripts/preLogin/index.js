module.exports = `
    SELECT userId, password
    FROM User
    WHERE username = ? or email = ?;
`;