const qMod = require("./../queryBuildModule"),
selectMod = require("./../sql/retrieveModule");

//module.exports.SQL_SELECT_BANNED = selectMod.selectByIdWhere("FakeUser", {isBanned: "?"});
module.exports.SQL_SELECT_NOT_BANNED = selectMod.selectByIdWhere("FakeUser", {role: "?"});
module.exports.SQL_SELECT_FAKE_USER = ""
module.exports.SQL_SELECT_BANNED = "SELECT u.username, b.reason, b.bannedUntil from FakeUser u, BanUser b WHERE u.role = ? and b.userId = u.fakeUserId";
module.exports.SQL_FAKE_USER_DATA_TABLE = "SELECT CONCAT_WS('', u.lastName,  ', ', u.firstName ) AS fullName, u.email, u.role from FakeUser u ";