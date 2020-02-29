const express = require('express'),
router = express.Router(),
{executeQuery, sendResults, updateRow, deleteRow} = require("./../../util/"),
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
	const query = bookScripts.databaseTable;
	executeQuery(query, [], (err, results)=>{
		sendResults(err, results, response);
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

// GET book/:bookId
router.get("/:bookId", (req, response) => {
	const query = bookScripts.retrieve;
	const {bookId} = req.params;
	executeQuery(query, [bookId], (err, results)=>{
		sendResults(err, results, response, true);
	});
});

// POST book/
router.post("/", (req, response)=>{
	const query = bookScripts.create;
	const {title, description, ISBN} = req.body;
	executeQuery(query, [title, description, ISBN], (err, results)=>{
		sendResults(err, results, response, true);
	});
});

// PUT book/:bookId
router.put("/:bookId", (req, response)=>{
	const {bookId} = req.params;
	const {title, description, ISBN} = req.body;

	updateRow(bookScripts, [title, description, ISBN], bookId, response);
});

// DELETE book/:bookId
router.delete("/:bookId", (req, response)=>{
	const {bookId} = req.params;
	
	deleteRow(bookScripts, bookId, response);
});

module.exports = router;