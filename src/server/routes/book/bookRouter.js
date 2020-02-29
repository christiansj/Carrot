const express = require('express'),
router = express.Router(),
{executeQuery, sendResults} = require("./../../modules/dbSession"),
bookScripts = require('./../../sql-scripts/book');

function getDirectoryHash(bookId){
	for(var directoryHash = 1; bookId < directoryHash *1000; directoryHash++){
		if(bookId < directoryHash* 1000){
			return diectoryHash;
		}
	}
}

// GET book/table
router.get("/table", (req, response)=>{
	const query = bookScripts.dataTable;
	executeQuery(query, [], (err, results)=>{
		sendResults(err, results, response);
	});
});

// GET book/:bookId
router.get("/:bookId", (req, response)=>{
	const query = bookScripts.bookById;
	const {bookId} = req.body;
	executeQuery(query, [bookId], (err, results)=>{
		sendResults(err, results, response, true);
	});
});

// GET book/authors/:bookId
router.get("/authors/:bookId", (req,response)=>{
	const query = bookScripts.getABooksAuthors;
	const {bookId} = req.params;
	executeQuery(query, [bookId], (err, results)=>{
		sendResults(err, results, response)
	});
});

// GET bookDetail/:bookId
router.get("/bookDetail/:bookId", (req, response) => {
	const query = "SELECT description, title, imagePath FROM Book WHERE bookId = ?;";
	const {bookId} = req.params;
	executeQuery(query, [bookId], (err, results)=>{
		sendResults(err, results, response, true);
	});
});

module.exports = router;