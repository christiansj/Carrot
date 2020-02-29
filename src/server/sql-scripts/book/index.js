const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const retrieve = require('./scripts/retrieveBook');
const createBook = require('./scripts/create');
const update = require('./scripts/update');
const deleteBook = require('./scripts/delete');

module.exports = {
   databaseTable,
   getABooksAuthors,
   createBook,
   retrieve,
   update,
   deleteBook
};