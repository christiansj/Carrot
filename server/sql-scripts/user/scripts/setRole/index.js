const { roles } = require('../../../../../src/constants/user');

module.exports = `
    UPDATE User
    SET role = ?
    WHERE userId = ?;
`;