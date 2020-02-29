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
    const query = genreScripts.retrieveGenre;
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
    const {updateGenre, retrieveGenre} = genreScripts;
    executeQuery(updateGenre, [name, genreId], (err, results)=>{
        if(err){
            response.status(500).send(err);
            return;
        }
        executeQuery(retrieveGenre, [genreId], (err, retrieveResults)=>{
            sendResults(err, retrieveResults, response, true);
        });
    });
});

// DELETE genre/:genreId
router.delete("/:genreId", (req, res)=>{
    const {retrieveGenre, deleteGenre} = genreScripts;
    const {genreId} = req.params;
    executeQuery(retrieveGenre, [genreId], (err, results)=>{
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