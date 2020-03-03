const router = require('express').Router();
const {executeQuery, sendResults, retrieveRow, updateRow, deleteRow, uniqueCheck} = require("./../../util/");
const bookScripts = require('./../../sql-scripts/book');
const {insertBookGenres, insertBookAuthors} = require('./functions');



// GET book/unique/:fieldName/:value
router.get("/unique/:fieldName/:value", (request, response)=>{
	const {fieldName, value} = request.params;
	const uniqueCheckProps = {
		fieldName,
		value,
		response,
		scripts: bookScripts
	};
	uniqueCheck(uniqueCheckProps);
});

// GET book/create-form
router.get("/create-form", (request, response)=>{
	const resBody = {
		obj: {
			title: "",
			description: "",
			ISBN: 123456789
		},
		uniqueFields: ["ISBN"],
		requiredFields: ["title", "ISBN"]
	};

	response.send(resBody);
});


// GET book/edit-form/:bookId
router.get("/edit-form/:bookId", (request, response)=>{
	const query = bookScripts.editForm;
	const {bookId} = request.params;

	retrieveRow(query, bookId, response);
});


// GET book/genres/:bookId
router.get("/genres/:bookId", (request, response)=>{
	const {retrieve, genresInBook} = bookScripts;
	const {bookId} = request.params;

	executeQuery(retrieve, [bookId], (err, results)=>{
		if(!results.length){
			response.statusCode(400).send('Book was not found');
			return;
		}
		executeQuery(genresInBook, [bookId], (err, genres)=>{
			sendResults(err, genres, response);
		});
	});
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

router.get("/", (request, response)=>{
	const query = bookScripts.retrieveAll;

	executeQuery(query, [], (err, results)=>{
		sendResults(err, results, response, false);
	});
});

// GET book/:bookId
router.get("/:bookId", (request, response) => {
	const query = bookScripts.retrieve;
	const {bookId} = request.params;
	
	retrieveRow(query, bookId, response);
});

// POST book/upload
router.post("/upload", (request, response)=>{
	const {uploadBook} = bookScripts;


	const {title, description, ISBN, authorId, genreIds} = request.body;

	executeQuery(uploadBook, [title, description, ISBN, authorId], (err, uploadResult)=>{
		if(err){
			response.status(400).send(err);
			return;
		}
		
		const bookId = uploadResult.insertId;

		insertBookAuthors({bookId, authorId, response})
		.then(()=>{
			insertBookGenres({bookId, genreIds});
			sendResults(err, uploadResult, response, true);
		})
	});
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