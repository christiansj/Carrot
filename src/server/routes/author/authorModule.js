const deleteMod = require("./../../modules/sql/deleteModule"),
dbSession = require("./../../modules/dbSession");

const SQL_SELECT_AUTHOR = "SELECT a.authorId as id, a.authorId as dataName, a.firstName, a.lastName from Author a";
module.exports.SQL_AUTHOR_BY_NAME = SQL_SELECT_AUTHOR +" WHERE a.firstName = ? and a.lastName = ?";
module.exports.SQL_SELECT_AUTHOR = SQL_SELECT_AUTHOR;
/**
*	Delete any instance of authorId in BookAuthor table
*	Finally, delete the recrod with authorId in Author table
*
*	@TODO set the author name to N/A instead of actually deleting the record
*	this is so books won't get lost. Also, provide a nuke option, where both the author
*	and their books get deleted
*/
module.exports.deleteAuthor = function(authorId){
	var query = deleteMod.deleteForeign("Book", "Author", false);
	query += deleteMod.deleteById("Author");
	dbSession.connection.query(query, [authorId, authorId], function(err, result){
		if(err){
			console.log("MYSQL error: " + err);
		}
	})
	return true;
}