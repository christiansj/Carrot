const databaseTable = require('./scripts/databaseTable');
const create = require('./scripts/create');
const retrieve = require('./scripts/retrieveGenre');
const update = require('./scripts/update');
const deleteRecord = require('./scripts/delete');

module.exports = {
    databaseTable, 
    create,
    retrieve,
    update,
    deleteRecord
};