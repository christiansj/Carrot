
const databaseTable = require('./scripts/databaseTable');
const retrieve = require('./scripts/retrieveBook');
const retrieveAll = require('./scripts/retrieveAll');
const create = require('./scripts/create');
const update = require('./scripts/update');
const deleteRecord = require('./scripts/delete');
const editForm = require('./scripts/edit-form');
const uploadBook = require('./scripts/uploadBook');
const isbnCheck = require('./scripts/uniqueFieldScripts/ISBN');
const setFolderHash = require('./scripts/setFolderHash');
module.exports = {
   databaseTable,
   create,
   retrieve,
   retrieveAll,
   update,
   deleteRecord,
   editForm,
   uploadBook,
   unique: {
      ISBN: isbnCheck
   },
   setFolderHash
};