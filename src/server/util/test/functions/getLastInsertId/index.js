const { executeQuery } = require('./../../../index');

module.exports = function(callback){
    executeQuery('SELECT LAST_INSERT_ID()', [], (err, results)=>{
        if (err) {
            console.log(`err ${err}`);
            callback(err, null);
        }
        var lastInsertId = results[0]['LAST_INSERT_ID()'];
        callback(null, lastInsertId);
    })
}