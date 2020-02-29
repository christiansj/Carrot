const express = require('express'),
router = express.Router(),
userScripts = require('./../../sql-scripts/user'),
{executeQuery, sendResults} = require('./../../modules/dbSession');

// GET user/:username
router.get("/:userId", (req, response)=> {
    const query = userScripts.byUsername;
    const {userId} = req.params;
   
	executeQuery(query, [userId], (err, results)=>{
        sendResults(err, results, response, true);
    });
});

// GET user/table
router.get("/table", (req, response)=>{
    const query = userScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});

// PUT user/deactivate/:userId
router.put("/deactivate/:userId", (req, response)=>{
    const {byId} = userScripts;
    const query = userScripts.deactivate;
    const {userId} = req.params;
    executeQuery(query, [userId], (err, results)=>{
        if(err){
            console.log(err);
            res.send(400);
            return;
        }
        executeQuery(byId, [userId], (err, byIdResults)=>{
            sendResults(err, byIdResults, response);
        })
        
    });
});
module.exports = router;