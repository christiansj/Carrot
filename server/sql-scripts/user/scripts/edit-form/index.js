module.exports = `
    SELECT username, firstName, lastName, role
    FROM User
    WHERE userId = ?;
`;