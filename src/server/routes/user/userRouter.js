const express = require('express'),
router = express.Router(),
userScripts = require('./../../sql-scripts/user'),
{executeQuery, sendResults} = require('./../../util');


// GET user/table
router.get("/table", (req, response)=>{
    const query = userScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});

// GET user/:userId
router.get("/:userId", (req, response)=> {
    const query = userScripts.retrieve;
    const {userId} = req.params;
   
	executeQuery(query, [userId], (err, results)=>{
        sendResults(err, results, response, true);
    });
});

router.get("/role/:role", (req, response)=>{
    const query = userScripts.retrieveByRole;
    const {role} = req.params;

    executeQuery(query, [role], (err, results)=>{
        sendResults(err, results, response);
    })
})



// PUT user/deactivate/:userId
router.put("/deactivate/:userId", (req, response)=>{
    const {retrieveUser} = userScripts;
    const query = userScripts.deactivate;
    const {userId} = req.params;
    executeQuery(query, [userId], (err, results)=>{
        if(err){
            console.log(err);
            res.send(400);
            return;
        }
        executeQuery(retrieveUser, [userId], (err, byIdResults)=>{
            sendResults(err, byIdResults, response);
        })
        
    });
});
module.exports = router;