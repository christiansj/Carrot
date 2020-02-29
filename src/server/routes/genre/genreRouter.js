const express = require("express"),
genreScripts = require('./../../sql-scripts/genre'),
{executeQuery} = require('./../../modules/dbSession'),
router = express.Router();

router.get("/", function(req,res,next){
    const query = genreScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        if(err){
            console.log(err);
            res.send(400);
        }else{
            res.json(results);
        }
    });
});

router.get("/:id", (req, res)=>{
    const query = genreScripts.byId;
    const {id} = req.params;
    executeQuery(query, [id], (err, results)=>{
        if(err){
            res.send(400);
        }else{
            res.json(results[0]);
        }
    });
});

module.exports = router;