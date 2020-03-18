const { executeQuery } = require('./../../../index');

module.exports = function(createScript, params){
    executeQuery(createScript, params, (err, results)=>{
        if(err){
            console.log(`err ${err}`);
        }
    })
}