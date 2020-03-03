const router = require('express').Router();
const userScripts = require('./../../sql-scripts/user');
const {executeQuery, sendResults, retrieveRow, updateRow} = require('./../../util');
const {loginUser, registerUser} = require('./functions');

// GET user/edit-form/:userId
router.get("/edit-form/:userId", (request, response)=>{
    const query = userScripts.editForm;
    const {userId} = request.params;

    retrieveRow(query, userId, response);
});


// GET user/table
router.get("/table", (request, response)=>{
    const query = userScripts.databaseTable;
    executeQuery(query, [], (err, results)=>{
        sendResults(err, results, response);
    });
});


// GET user/:userId
router.get("/:userId", (request, response)=> {
    const query = userScripts.retrieve;
    const {userId} = request.params;
   
	retrieveRow(query, userId, response);
});


// GET user/role/:role
router.get("/role/:role", (request, response)=>{
    const query = userScripts.retrieveByRole;
    const {role} = request.params;

    executeQuery(query, [role], (err, results)=>{
        sendResults(err, results, response);
    });
});


// POST user/login
router.post("/login", (request, response)=>{
    const {identity, password} = request.body;
    
    
    loginUser(request.body, response);
});


// POST user/register
router.post("/register", (request, response)=>{
    const {password, verifyPassword} = request.body;
    if(password !== verifyPassword){
        response.status(400).send("passwords don't match");
        return;
    }
    
    registerUser(request.body, response);
});


// PUT user/deactivate/:userId
router.put("/deactivate/:userId", (request, response)=>{
    const {retrieveUser} = userScripts;
    const query = userScripts.deactivate;
    const {userId} = request.params;

    executeQuery(query, [userId], (err, results)=>{
        if(err){
            console.log(err);
            res.send(400);
            return;
        }
        executeQuery(retrieveUser, [userId], (err, byIdResults)=>{
            sendResults(err, byIdResults, response);
        });
    });
});

// PUT user/:userId
router.put('/:userId', (request, response)=>{
    const {userId} = request.params;
    const {username, firstName, lastName, role} = request.body;

    updateRow(userScripts, [username, firstName, lastName, role], userId, response);
});

module.exports = router;