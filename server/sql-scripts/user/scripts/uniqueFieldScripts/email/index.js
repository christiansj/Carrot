module.exports = `
    SELECT password 
    FROM User
    WHERE email = ? or username = ?;
`;