const retrieve = require('./scripts/retrieveUser');
const byUsername = require('./scripts/byUsername');
const databaseTable = require('./scripts/databaseTable');
const deactivate = require('./scripts/deactivate');
const retrieveByRole = require('./scripts/retrieveByRole');

module.exports = {
    byUsername,
    databaseTable,
    deactivate,
    retrieve,
    retrieveByRole
}