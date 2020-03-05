const userScripts = require('./../../../../sql-scripts/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const { executeQuery } = require('./../../../../util');

function loginUser(requestBody, response) {
    async.waterfall([
        function confirmUserExists(callback) {

            const { identity } = requestBody;
            var identityType = "username";
            var getUserQuery = userScripts.preLogin;

            if (identity.search('@') >= 0) {
                identityType = "email";
            }

            executeQuery(getUserQuery, [identity, identity], (err, userResult) => {
                if (!userResult.length) {
                    callback(`Couldn't find account with ${identityType}: ${identity}`, null, null);
                    return;
                }
                const loginPassword = requestBody.password;
                callback(null, loginPassword, userResult[0]);
            });
        },
        comparePasswords,
        updateUser
    ], function (err, foundUserResult) {
        if (err) {
            console.log(err);
            response.status(400).send(err);
        } else {
            response.send(foundUserResult);
        }
    })
}


function comparePasswords(password, foundUser, callback) {
    bcrypt.compare(password, foundUser.password, (err, result) => {
        if (result) {
            callback(null, foundUser.userId);
        } else {
            callback("invalid password", null);
        }
    })
}

function updateUser(userId, callback) {
    const query = userScripts.login;
    const { retrieve } = userScripts;
    executeQuery(query, [userId], (err, results) => {
        if (err) {
            callback(err, null);
        }
        executeQuery(retrieve, [userId], (err, user) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, user);
            }


        });

    });
}

module.exports = loginUser;