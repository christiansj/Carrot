const retrieve = require('./scripts/retrieveUser');
const byUsername = require('./scripts/byUsername');
const databaseTable = require('./scripts/databaseTable');
const deactivate = require('./scripts/deactivate');
const retrieveByRole = require('./scripts/retrieveByRole');
const editForm = require('./scripts/edit-form');
const update = require('./scripts/update');
const login = require('./scripts/login');
const register = require('./scripts/register');
const preLogin = require('./scripts/preLogin');
// const {emailCheck, usernameCheck} = require('./scripts/uniqueFieldScripts');
module.exports = {
    byUsername,
    databaseTable,
    deactivate,
    login, 
    register,
    retrieve,
    retrieveByRole,
    editForm,
    update,
    preLogin
}