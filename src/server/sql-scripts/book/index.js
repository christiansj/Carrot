const getABooksAuthors = require('./scripts/getABooksAuthors/');
const databaseTable = require('./scripts/databaseTable');
const retrieve = require('./scripts/retrieveBook');
const retrieveAll = require('./scripts/retrieveAll');
const create = require('./scripts/create');
const update = require('./scripts/update');
const deleteRecord = require('./scripts/delete');
const editForm = require('./scripts/edit-form');
const genresInBook = require('./scripts/genresInBook');
const uploadBook = require('./scripts/uploadBook');
const isbnCheck = require('./scripts/unique/ISBN');
module.exports = {
   databaseTable,
   getABooksAuthors,
   create,
   retrieve,
   retrieveAll,
   update,
   deleteRecord,
   editForm,
   genresInBook,
   uploadBook,
   unique: {
      ISBN: isbnCheck
   }
};