const databaseTable = require('./scripts/databaseTable');
const createGenre = require('./scripts/create');
const retrieveGenre = require('./scripts/retrieveGenre');
const updateGenre = require('./scripts/update');
const deleteGenre = require('./scripts/delete');

module.exports = {
    databaseTable, 
    createGenre,
    retrieveGenre,
    updateGenre,
    deleteGenre
};