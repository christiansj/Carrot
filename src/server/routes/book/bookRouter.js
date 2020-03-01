const express = require('express'),
router = express.Router(),
{executeQuery, sendResults, retrieveRow, updateRow, deleteRow} = require("./../../util/"),
bookScripts = require('./../../sql-scripts/book');

function getDirectoryHash(bookId){
	for(var directoryHash = 1; bookId < directoryHash *1000; directoryHash++){
		if(bookId < directoryHash* 1000){
			return diectoryHash;
		}
	}
}

// GET book/edit-form/:bookId
router.get("/edit-form/:bookId", (request, response)=>{
	const query = bookScripts.editForm;
	const {bookId} = request.params;

	retrieveRow(query, bookId, response);
});


// GET book/table
router.get("/table", (request, response)=>{
	const query = bookScripts.databaseTable;

	executeQuery(query, [], (err, results)=>{
		sendResults(err, results, response);
	});
});


// GET book/authors/:bookId
router.get("/authors/:bookId", (request,response)=>{
	const query = bookScripts.getABooksAuthors;
	const {bookId} = request.params;

	executeQuery(query, [bookId], (err, results)=>{
		sendResults(err, results, response)
	});
});


// GET book/:bookId
router.get("/:bookId", (request, response) => {
	const {bookId} = request.params;

	retrieveRow(bookScripts, bookId, response);
});


// POST book/
router.post("/", (request, response)=>{
	const query = bookScripts.create;
	const {title, description, ISBN} = request.body;

	executeQuery(query, [title, description, ISBN], (err, results)=>{
		sendResults(err, results, response, true);
	});
});


// PUT book/:bookId
router.put("/:bookId", (request, response)=>{
	const {bookId} = request.params;
	const {title, description, ISBN} = request.body;

	updateRow(bookScripts, [title, description, ISBN], bookId, response);
});


// DELETE book/:bookId
router.delete("/:bookId", (request, response)=>{
	const {bookId} = request.params;
	
	deleteRow(bookScripts, bookId, response);
});

module.exports = router;