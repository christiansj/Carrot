const byId = require('./scripts/byId');
const byUsername = require('./scripts/byUsername');
const databaseTable = require('./scripts/databaseTable');
const deactivate = require('./scripts/deactivate');
module.exports = {
    byUsername,
    databaseTable,
    deactivate,
    byId
}