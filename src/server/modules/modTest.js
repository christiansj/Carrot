const insertMod = require('./sql/insertModule'),
qMod = require('./queryBuildModule'),
bookMod = require("./../routes/book/bookModule"),
authMod = require("./authorization/authorizationModule");

const dummyJSON = {
	title: "The Last Mouse",
	"genre.Children":  1,
	ISBN: 12345
}

const authJSON = {
	fbID: "5748935024",
	networkName: "Facebook",
	email: "christiansj8@gmail",
	name: "Christian San Juan"
}

console.log(authMod.insertFacebook(authJSON));