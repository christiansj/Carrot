const express = require("express"),
genreScripts = require('./../../sql-scripts/genre'),
{executeQuery, sendResults, updateRow, deleteRow, retrieveRow} = require('../../util'),
router = express.Router();

// GET genre/edit-form/:genreId
router.get("/edit-form/:genreId", (request, response)=>{
    const query = genreScripts.editForm;
    const {genreId} = request.params;

    retrieveRow(query, genreId, response);
});


// GET genre/table
router.get("/table", (request,response)=>{
    const query = genreScripts.databaseTable;

    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});


// GET genre/
router.get("/", function(request,response){
    const query = genreScripts.databaseTable;

    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});


// GET genre/:id
router.get("/:genreId", (request, response)=>{
    const query = genreScripts.retrieve;
    const {genreId} = request.params;

    retrieveRow(query, genreId, response);
});


// POST genre/
router.post("/", (request, response)=>{
    const query = genreScripts.create;
    const {name} = request.body;
    executeQuery(query, [name], (err, results)=>{
        sendResults(err, results, response, true);
    });
});


// PUT genre/:genreId
router.put('/:genreId', (request, response)=>{
    const {genreId} = request.params;
    const {name} = request.body;
    
    updateRow(genreScripts, [name], genreId, response);
});


// DELETE genre/:genreId
router.delete("/:genreId", (request, response)=>{
    const {genreId} = request.params;

    deleteRow(genreScripts, genreId, response)
});

module.exports = router;