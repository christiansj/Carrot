const bcrypt = require('bcryptjs');
const userScripts = require('./../../../../sql-scripts/user');
const { executeQuery} = require('./../../../../util');

function createTestUser(callback){
    const password = '__test_password__';
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            callback(err);
            return;
        }
        const params = ['Test', 'User', '__test_user__', 'testUser@example.com', hashedPassword]
        const query = userScripts.register;

        executeQuery(query, params, (err, result) => {
            if (err) {
                callback(err);
                return;
            }
        });
    });
}

module.exports = createTestUser;