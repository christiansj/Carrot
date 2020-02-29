const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const retrieveBook = require('./scripts/retrieveBook');
const createBook = require('./scripts/create');
const updateBook = require('./scripts/update');
const deleteBook = require('./scripts/delete');

module.exports = {
   databaseTable,
   getABooksAuthors,
   createBook,
   retrieveBook,
   updateBook,
   deleteBook
};