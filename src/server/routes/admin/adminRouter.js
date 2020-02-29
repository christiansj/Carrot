const router = require('express').Router()
const {executeQuery, sendResults} = require('./../../util');

router.get('/tableNames', (req,response)=>{
    executeQuery('SHOW TABLES', [], (err, results)=>{
       if(err){
           response.status(500).send(err);
           return;
       }
       var names = [];
       for(var i = 0; i < results.length; i++){
        names.push(results[i]["Tables_in_mock_carrot"]);

       }
       response.send(names);
    });
});

module.exports = router;