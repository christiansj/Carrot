const express = require("express"),
genreScripts = require('./../../sql-scripts/genre'),
{executeQuery, sendResults} = require('../../modules/dbSession'),
router = express.Router();

// GET genre/
router.get("/", function(req,res,next){
    const query = genreScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, res);
    });
});

// GET genre/:id
router.get("/:id", (req, res)=>{
    const query = genreScripts.byId;
    const {id} = req.params;
    executeQuery(query, [id], (err, results)=>{
       sendResults(err, results, res, true);
    });
});

// POST genre/
router.post("/", (req, res)=>{
    const query = genreScripts.post;
    const {name} = req.body;
    executeQuery(query, [name], (err, results)=>{
        sendResults(err, results, res, true);
    });
});


module.exports = router;