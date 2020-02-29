const express = require('express'),
router = express.Router(),
userScripts = require('./../../sql-scripts/user'),
{executeQuery, sendResults} = require('./../../modules/dbSession');

// GET user/:username
router.get("/:username", (req, response)=> {
    const query = userScripts.byUsername;
    const {username} = req.params;
	executeQuery(query, [username], (err, results)=>{
        sendResults(err, results, response, true);
    });
});

router.get("/table", (req, response)=>{
    const query = userScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});
module.exports = router;