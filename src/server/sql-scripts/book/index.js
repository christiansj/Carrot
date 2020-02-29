const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const byId = require('./scripts/byId');

 module.exports = {
    byId,
    databaseTable, 
    getABooksAuthors,
 };