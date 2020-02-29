const retrieveUser = require('./scripts/retrieveUser');
const byUsername = require('./scripts/byUsername');
const databaseTable = require('./scripts/databaseTable');
const deactivate = require('./scripts/deactivate');
module.exports = {
    byUsername,
    databaseTable,
    deactivate,
    retrieveUser
}