const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const retrieve = require('./scripts/retrieveBook');
const create = require('./scripts/create');
const update = require('./scripts/update');
const deleteRecord = require('./scripts/delete');
const editForm = require('./scripts/edit-form');
const genresInBook = require('./scripts/genresInBook');

const isbnCheck = require('./scripts/unique/ISBN');
module.exports = {
   databaseTable,
   getABooksAuthors,
   create,
   retrieve,
   update,
   deleteRecord,
   editForm,
   genresInBook,
   unique: {
      ISBN: isbnCheck
   }
};