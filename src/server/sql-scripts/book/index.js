const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const byId = require('./scripts/byId');
const createBook = require('./scripts/create');
const deleteBook = require('./scripts/delete');
 module.exports = {
    byId,
    databaseTable, 
    getABooksAuthors,
    createBook,
    deleteBook
 };