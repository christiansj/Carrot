const { executeQuery } = require('./../../../index');
const getLastInsertId = require('./../getLastInsertId');

module.exports = function (deleteScript) {
    getLastInsertId((err, id)=>{
        executeQuery(deleteScript, [id], (err, results) => {
            if (err) {
                console.log(`err ${err}`);
            }
        });
    })
}