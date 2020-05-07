const { executeQuery } = require('./../../../index');
const getLastInsertId = require('./../getLastInsertId');
const getMaxId = require('./../getMaxId');

function deleteRecord(deleteScript, id) {
    executeQuery(deleteScript, [id], (err, results) => {
        if (err) {
            console.log(`err ${err}`);
        }
    });
}

module.exports = function (deleteScript, tableName, idName) {
    getLastInsertId((err, lastInsertId) => {
        if (err) {
            console.log(err)
            getMaxId(tableName, idName, (err, maxId) => {
                if (err) {
                    console.log(err);
                    return;
                }
                deleteRecord(deleteScript, maxId);
            });
            return;
        }

        deleteRecord(deleteScript, lastInsertId);
    })
}