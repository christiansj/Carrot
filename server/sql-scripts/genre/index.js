const databaseTable = require('./scripts/databaseTable');
const create = require('./scripts/create');
const retrieve = require('./scripts/retrieveGenre');
const update = require('./scripts/update');
const deleteRecord = require('./scripts/delete');
const editForm = require('./scripts/edit-form');

const nameCount = require('./scripts/uniqueChecks/name');
module.exports = {
    databaseTable, 
    create,
    retrieve,
    update,
    deleteRecord,
    editForm,
    unique: {
        name: nameCount
    }
  
};