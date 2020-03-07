const {roles} = require('./../../../../constants/user');

module.exports = `
    INSERT INTO BanUser (userId, reason, dateBanned, dateUnbanned)
    VALUES(?, ?, CURRENT_TIMESTAMP, ?);

    UPDATE User
    SET role = ${roles.BANNED}
    WHERE userId = ?;
`;