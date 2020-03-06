const express = require('express');
const router = express.Router();
const dbSession = require('./../../modules/dbSession');
const searchScripts = require('./../../sql-scripts/search');


router.get("/:tableName/:searchQuery/", (request, response) => {
	const { searchQuery } = request.params;
	const tableName = request.params.tableName.toLowerCase();
	if (!Object.keys(searchScripts).includes(tableName)) {
		response.status(400).send("invalid tablename");
		return;
	}
	const query = searchScripts[tableName];

	dbSession.connection.query(query, [searchQuery], (err, results) => {
		if (err) {
			console.log(err);
			response.status(500).send(err);
			return;
		}

		response.json(results);
	})
})

module.exports = router;