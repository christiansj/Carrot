const express = require("express"),
router = express.Router(),
authorScripts = require('./../../sql-scripts/author'),
{executeQuery, sendResults} = require("./../../util");

// GET author/books/:userId
router.get("/books/:userId", (req, response)=> {
	const query = authorScripts.booksFromAuthor;
	const {userId} = req.params;

	executeQuery(query, [userId], (err, results)=>{
		sendResults(err, results, response);
	});
});


module.exports = router;