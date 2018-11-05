const express = require("express"),
router = express.Router(),
dbSession = require("./../../modules/dbSession"),
deleteMod = require("./../../modules/sql/deleteModule"),
authorMod = require("./../author/authorModule"),
bookMod = require("./../book/bookModule"),
genreMod = require("./../genre/genreModule"),
TABLE_NAMES = require("./../../data/TableNames");

router.route("/:tableIndex/:recordId")
	.delete(function (req, res){
		const tableName = TABLE_NAMES[req.params.tableIndex];
		handleDelete(tableName, req.params.recordId)
		res.sendStatus(200);
	});

	
function handleDelete(tableName, recordId){
	var deleteQuery;
	const errString = "Internal Server Error: Invalid table"
	+ "name: " + tableName + "passed into handleDelete";
	switch(tableName){
		case "Author":
			authorMod.deleteAuthor(recordId);
			return true;
		case "Book":
			bookMod.deleteBook(recordId);
			return true;
		case "Genre":
			genreMod.deleteGenre(recordId);
			return true;
		default:
			throw new Error(errString)
			return false;
	}
}
module.exports = router;