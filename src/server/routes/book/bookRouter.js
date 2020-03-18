const router = require('express').Router();
const { executeQuery, sendResults, retrieveRow, updateRow, deleteRow, uniqueCheck } = require("./../../util/");
const bookScripts = require('./../../sql-scripts/book');
const bookGenreScripts = require('./../../sql-scripts/bookGenre');
const bookAuthorScripts = require('./../../sql-scripts/bookAuthor');
const { uploadBookFunc } = require('./functions/')
const upload = require('./../../multer');

// GET book/unique/:fieldName/:value
router.get("/unique/:fieldName/:value", (request, response) => {
	const { fieldName, value } = request.params;
	const uniqueCheckProps = {
		fieldName,
		value,
		response,
		scripts: bookScripts
	};
	uniqueCheck(uniqueCheckProps);
});

// GET book/create-form
router.get("/create-form", (request, response) => {
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
router.get("/edit-form/:bookId", (request, response) => {
	const query = bookScripts.editForm;
	const { bookId } = request.params;

	retrieveRow(query, bookId, response);
});


// GET book/genres/:bookId
router.get("/genres/:bookId", (request, response) => {
	const { retrieve } = bookScripts;
	const { genresInBook } = bookGenreScripts;
	const { bookId } = request.params;

	executeQuery(retrieve, [bookId], (err, results) => {
		if (!results.length) {
			response.status(400).send('Book was not found');
			return;
		}
		executeQuery(genresInBook, [bookId], (err, genres) => {
			sendResults(err, genres, response);
		});
	});
});


// GET book/table
router.get("/table", (request, response) => {
	const query = bookScripts.databaseTable;

	executeQuery(query, [], (err, results) => {
		sendResults(err, results, response);
	});
});


// GET book/authors/:bookId
router.get("/authors/:bookId", (request, response) => {
	const query = bookAuthorScripts.authorsInBook;
	const { bookId } = request.params;
	
	executeQuery(query, [bookId], (err, results) => {
		sendResults(err, results, response)
	});
});

router.get("/", (request, response) => {
	const query = bookScripts.retrieveAll;

	executeQuery(query, [], (err, results) => {
		sendResults(err, results, response, false);
	});
});

// GET book/:bookId
router.get("/:bookId", (request, response) => {
	const query = bookScripts.retrieve;
	const { bookId } = request.params;

	retrieveRow(query, bookId, response);
});

// POST book/upload
router.post("/upload", (request, response) => {
	console.log(request.body)
	if (Object.keys(request.body).length === 0) {
		response.status(400).send('empty formdata')
		return;
	}
	var { body } = request;
	body.ISBN = parseInt(body.ISBN);

	// response.send('ok');
	uploadBookFunc(body, response);
});

// POST book/
router.post("/", (request, response) => {
	const query = bookScripts.create;
	const { title, description, ISBN } = request.body;

	executeQuery(query, [title, description, ISBN], (err, results) => {
		sendResults(err, results, response, true);
	});
});

router.put("/details/:bookId", (request, response)=>{
	const {title, description} = request.body;
	const {bookId} = request.params;
	const {retrieve, update} = bookScripts;
	executeQuery(retrieve, [bookId], (err, book)=>{
		if(err){
			response.status(400).send(err);
			return;
		}else if(!book.length){
			response.status(400).send('book not found');
			return;
		}
		
		updateRow(retrieve, update, [title, description, book[0].ISBN], bookId, response);
	})
	
});
// PUT book/:bookId
router.put("/:bookId", (request, response) => {
	const { bookId } = request.params;

	const { title, description, ISBN } = request.body;
	const {retrieve, update} = bookScripts;
	updateRow(retrieve, update, [title, description, ISBN], bookId, response);
});


// DELETE book/:bookId
router.delete("/:bookId", (request, response) => {
	const { bookId } = request.params;
	const {retrieve, deleteRecord} = bookScripts;
	deleteRow(retrieve, deleteRecord, bookId, response);
});

module.exports = router;