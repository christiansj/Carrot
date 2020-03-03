module.exports = `
    UPDATE User
    SET lastLoginDate = CURRENT_TIMESTAMP, isLoggedIn = 1
    WHERE userId = ?;
`;