module.exports = `
    UPDATE User
    SET username = ?, firstName = ?, lastName = ?, role = ?
    WHERE userId = ?
`;