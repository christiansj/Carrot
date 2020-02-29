const express = require("express"),
genreScripts = require('./../../sql-scripts/genre'),
{executeQuery, sendResults, updateRow} = require('../../util'),
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
    const query = genreScripts.retrieve;
    const {id} = req.params;
    executeQuery(query, [id], (err, results)=>{
       sendResults(err, results, res, true);
    });
});

// POST genre/
router.post("/", (req, res)=>{
    const query = genreScripts.createGenre;
    const {name} = req.body;
    executeQuery(query, [name], (err, results)=>{
        sendResults(err, results, res, true);
    });
});

// PUT genre/:genreId
router.put('/:genreId', (req, response)=>{
    const {genreId} = req.params;
    const {name} = req.body;
    
    updateRow(genreScripts, [name], genreId, response);
});

// DELETE genre/:genreId
router.delete("/:genreId", (req, res)=>{
    const {retrieve, deleteGenre} = genreScripts;
    const {genreId} = req.params;
    executeQuery(retrieve, [genreId], (err, results)=>{
        if(!results.length){
            res.status(400).send("Genre not found");
            return;
        }else{
            executeQuery(deleteGenre, [genreId], (err, deleteRes)=>{
                sendResults(err, results, deleteRes);
            });
        }
     
    });
});

module.exports = router;