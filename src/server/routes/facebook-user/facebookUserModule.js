const dbSession = require("./../../modules/dbSession"),
insertMod = require("./../../modules/sql/insertModule");

module.exports.SQL_SELECT_FB_USER = "SELECT facebookUserId as fbId, name, email from FacebookUser ";

function insertFBUser(fbUserJSON){
	const fbRecord = {
		
	}
	var query = insertMod.createInsertQuery("FacebookUser", fbUserJSON);
	console.log(query);
}
const dummyUser = {
	name: "Christian San Juan",
	email: "brownsugar123@gmail.com",
	facebookUserId: "12345678",
}

