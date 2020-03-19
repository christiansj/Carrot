const { executeQuery } = require('./../../../index');

module.exports = function(tableName, idName, callback){
    executeQuery(`SELECT MAX(${idName}) FROM ${tableName}`, [], (err, results)=>{
        if(err){
            callback(err, null);
            return;
        }
        var maxId = results[0][`MAX(${idName})`];
        callback(null, maxId);
    });
}