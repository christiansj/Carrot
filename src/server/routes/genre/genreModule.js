const deleteMod = require('./../../modules/sql/deleteModule'),
dbSession = require("./../../modules/dbSession"),
tables = require("./../../data/TableNames");

/**
 * Select a genre
 */
const SQL_SELECT_GENRE = "Select g.genreId as id, g.name, g.name as dataName from Genre g ";
module.exports.SQL_SELECT_GENRE = SQL_SELECT_GENRE;

/**
 * Delete all instances of genreId in BookGenre table.
 * Then delete the record with genreId in Genre table.
 * @param {Number} genreId 
 */
function deleteGenre(genreId){
	var query = deleteMod.deleteForeign("Book", "Genre", false);
	query += deleteMod.deleteById("Genre");
	
	dbSession.connection.query(query, [genreId, genreId], function(err, result){
		if(err){console.log(err)}
	});
	return true;
}

module.exports.deleteGenre = deleteGenre;