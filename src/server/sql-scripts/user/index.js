const retrieve = require('./scripts/retrieveUser');
const byUsername = require('./scripts/byUsername');
const databaseTable = require('./scripts/databaseTable');
const deactivate = require('./scripts/deactivate');
const retrieveByRole = require('./scripts/retrieveByRole');
const editForm = require('./scripts/edit-form');
const update = require('./scripts/update');
module.exports = {
    byUsername,
    databaseTable,
    deactivate,
    retrieve,
    retrieveByRole,
    editForm,
    update
}