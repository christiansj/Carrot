const userScripts = require('./../../../../sql-scripts/user');
const { executeQuery, sendResults } = require('./../../../../util');
const bcrypt = require('bcryptjs');


function loginUser(requestBody = {}, response) {
    confirmUserExists(requestBody, (isUserExists, user, errMsg) => {
        if (!isUserExists) {
            response.status(400).send(errMsg);
            return;
        } 
        const loginPassword = requestBody.password;
        
        comparePassword(loginPassword, user.password, (isCorrect)=>{
            if(isCorrect){
                updateUser(user.userId, response);
            }else{
                response.status(400).send("bad password")
            }
        });
    })
}


function confirmUserExists(requestBody = {}, callback) {
    const { identity } = requestBody;
    var identityType = "username";
    var getUserQuery = userScripts.preLogin;

    if (identity.search('@') >= 0) {
        identityType = "email";
    }

    executeQuery(getUserQuery, [identity, identity], (err, userResult) => {
        if (!userResult.length) {
            var errMsg = `Couldn't find account with ${identityType}: ${identity}`
            callback(false, null, errMsg);
        } else {
            callback(true, userResult[0], null)
        }
    });
}


function comparePassword(password, hashedPassword, callback){
    bcrypt.compare(password, hashedPassword, (err, result)=> {
        if(result){
            callback(true);
        }else{
            callback(false);
        }
    })
}


function updateUser(userId, response){
    const query = userScripts.login;
    executeQuery(query, [userId], (err, results)=>{
        console.e
        response.status(200).send("ok");
    });
}

module.exports = loginUser;