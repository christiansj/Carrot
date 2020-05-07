module.exports = `
SELECT userId, username, firstName, lastName, email, role, creationDate, lastLoginDate
    from User
    WHERE userId = ?;
`;