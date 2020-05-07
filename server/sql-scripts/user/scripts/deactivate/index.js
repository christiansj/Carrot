const {DEACTIVATED} = require('../../../../../src/constants/user').roles

module.exports = `
    UPDATE User SET role = ${DEACTIVATED}
    WHERE userId = ?;
`;