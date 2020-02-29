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
	const query = bookScripts.retrieveBook;
	const {bookId} = req.params;
	executeQuery(query, [bookId], (err, results)=>{
		sendResults(err, results, response, true);
	});
});

// POST book/
router.post("/", (req, response)=>{
	const query = bookScripts.createBook;
	const {title, description, ISBN} = req.body;
	executeQuery(query, [title, description, ISBN], (err, results)=>{
		sendResults(err, results, response, true);
	});
});

// PUT book/:bookId
router.put("/:bookId", (req, response)=>{
	const {bookId} = req.params;
	const {title, description, ISBN} = req.body;
	const {updateBook, retrieveBook} = bookScripts;
	executeQuery(updateBook, [title, description, ISBN, bookId], (err, results)=>{
		if(err){
			response.status(500).send(err);
			return;
		}

		executeQuery(retrieveBook, [bookId], (err, retrieveResults)=>{
			sendResults(err, retrieveResults, response, true);
		});
	});
});

// DELETE book/:bookId
router.delete("/:bookId", (req, response)=>{
	const {retrieveBook, deleteBook} = bookScripts.deleteBook;
	const {bookId} = req.params;
	executeQuery(retrieveBook, [bookId], (err, results)=>{
		if(!results.length){
			response.status(400).send("Book wasn't found");
			return;
		}
		executeQuery(deleteBook, [bookId], (err, resDelete)=>{
			sendResults(err, resDelete, response);
		});
	});
});

module.exports = router;