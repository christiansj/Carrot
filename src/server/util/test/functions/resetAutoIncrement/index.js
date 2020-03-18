const { executeQuery } = require('./../../../index');

const query = (tableName) => `ALTER TABLE ${tableName} AUTO_INCREMENT = ?;`;

function resetAutoIncrement(tableName, idName){
    executeQuery(`SELECT MAX(${idName}) FROM ${tableName}`, [], (err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        var maxId = results[0][`MAX(${idName})`];
        executeQuery(query(tableName), [ maxId+1], (err, results)=>{
            if(err){
                console.log(err);
            }
        })
    });
}
module.exports = resetAutoIncrement;