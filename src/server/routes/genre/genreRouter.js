const express = require("express"),
genreScripts = require('./../../sql-scripts/genre'),
{executeQuery, sendResults, updateRow, deleteRow} = require('../../util'),
router = express.Router();

// GET genre/table
router.get("/table", (req,response,next)=>{
    const query = genreScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});

// GET genre/
router.get("/", function(req,response,next){
    const query = genreScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});



// GET genre/:id
router.get("/:id", (req, response)=>{
    const query = genreScripts.retrieve;
    const {id} = req.params;
    executeQuery(query, [id], (err, results)=>{
       sendResults(err, results, response, true);
    });
});

// POST genre/
router.post("/", (req, response)=>{
    const query = genreScripts.create;
    const {name} = req.body;
    executeQuery(query, [name], (err, results)=>{
        sendResults(err, results, response, true);
    });
});

// PUT genre/:genreId
router.put('/:genreId', (req, response)=>{
    const {genreId} = req.params;
    const {name} = req.body;
    
    updateRow(genreScripts, [name], genreId, response);
});

// DELETE genre/:genreId
router.delete("/:genreId", (req, response)=>{
    const {genreId} = req.params;

    deleteRow(genreScripts, genreId, response)
});

module.exports = router;