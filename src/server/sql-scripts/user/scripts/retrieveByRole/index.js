module.exports = `
    SELECT username, firstName, lastName, email, lastLoginDate
    FROM User
    WHERE role = ?; 
`;