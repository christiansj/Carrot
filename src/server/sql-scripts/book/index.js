const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const byId = require('./scripts/byId');
const create = require('./scripts/create');

 module.exports = {
    byId,
    databaseTable, 
    getABooksAuthors,
    create
 };