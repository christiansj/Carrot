const {DEACTIVATED} = require('./../../../../constants/user').roles

module.exports = `
    UPDATE User SET role = ${DEACTIVATED}
    WHERE userId = ?;
`;