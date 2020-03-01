const router = require('express').Router();
const displayedTables = require('../../constants/displayed-tables');
const {executeQuery, sendResults} = require('./../../util');

router.get('/tableNames', (req,response)=>{
    executeQuery('SHOW TABLES', [], (err, results)=>{
       if(err){
           response.status(500).send(err);
           return;
       }
       var names = [];
       for(var i = 0; i < results.length; i++){
           var tableName = results[i]["Tables_in_mock_carrot"];
           
           if(displayedTables.find(item => item === tableName) !== undefined){
                names.push(tableName);
           }
       }
       if(!names.length){
           response.statusCode(204).(names);
           return;
       }
       
       response.send(names);
    });
});

module.exports = router;