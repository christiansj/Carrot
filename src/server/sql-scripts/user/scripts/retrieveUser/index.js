module.exports = `
SELECT username, firstName, lastName, email, role, creationDate, lastLoginDate
    from User
    WHERE userId = ?;
`;