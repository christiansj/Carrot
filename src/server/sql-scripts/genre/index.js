const retrieveGenre = require('./scripts/retrieveGenre');
const databaseTable = require('./scripts/databaseTable');
const createGenre = require('./scripts/create');
const deleteGenre = require('./scripts/delete');
module.exports = {
   
    databaseTable, 
    createGenre,
    retrieveGenre,
    deleteGenre
};