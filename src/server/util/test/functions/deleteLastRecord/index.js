const { executeQuery } = require('./../../../index');

module.exports = function (deleteScript) {
    executeQuery('select LAST_INSERT_ID()', [], (err, results) => {
        if (err) {
            console.log(`err ${err}`);
            return;
        }

        var lastInsertId = results[0]['LAST_INSERT_ID()'];
        executeQuery(deleteScript, [lastInsertId], (err, results) => {
            if (err) {
                console.log(`err ${err}`);
            }
        });
    });
}
