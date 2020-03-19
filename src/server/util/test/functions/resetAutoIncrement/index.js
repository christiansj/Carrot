const { executeQuery } = require('./../../../index');
const getMaxId  = require('./../getMaxId');
const query = (tableName) => `ALTER TABLE ${tableName} AUTO_INCREMENT = ?;`;

function resetAutoIncrement(tableName, idName) {
    getMaxId(tableName, idName, (err, maxId) => {
        if (err) {
            console.log(err);
            return;
        }
        executeQuery(query(tableName), [maxId + 1], (err, results) => {
            if (err) {
                console.log(err);
            }
        })
    });
}
module.exports = resetAutoIncrement;