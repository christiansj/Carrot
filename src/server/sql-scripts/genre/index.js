const databaseTable = require('./scripts/databaseTable');
const createGenre = require('./scripts/create');
const retrieve = require('./scripts/retrieveGenre');
const update = require('./scripts/update');
const deleteGenre = require('./scripts/delete');

module.exports = {
    databaseTable, 
    createGenre,
    retrieve,
    update,
    deleteGenre
};