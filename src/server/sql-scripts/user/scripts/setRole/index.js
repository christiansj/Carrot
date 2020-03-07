const { roles } = require('../../../../../constants/user');

module.exports = `
    UPDATE User
    SET role = ?
    WHERE userId = ?;
`;