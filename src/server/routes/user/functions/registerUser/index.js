const userScripts = require('./../../../../sql-scripts/user');
const { executeQuery, sendResults } = require('./../../../../util');
const bcrypt = require('bcryptjs');

function registerUser(requestBody = {}, response) {
    const { password } = requestBody;
    
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.log(err);
            response.status(500).send(err);
            return;
        }
        insertUser(requestBody, hashedPassword, response);
    });
}

function insertUser(requestBody = {}, hashedPassword, response) {
    const { firstName, lastName, username, email } = requestBody;
    const query = userScripts.register;
    const params = [firstName, lastName, username, email, hashedPassword];

    executeQuery(query, params, (err, result) => {
        if (err) {
            response.status(400).send(err);
            return;
        }
        sendResults(err, result, response);
    });
}

module.exports = registerUser;