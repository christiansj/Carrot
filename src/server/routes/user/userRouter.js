const router = require('express').Router();
const userScripts = require('./../../sql-scripts/user');
const banUserScripts = require('./../../sql-scripts/banUser');

const { executeQuery, sendResults, retrieveRow, updateRow } = require('./../../util');
const { loginUser, registerUser } = require('./functions');
const userConstants = require('./../../constants/user');


// GET user/edit-form/:userId
router.get("/edit-form/:userId", (request, response) => {
    const query = userScripts.editForm;
    const { userId } = request.params;

    retrieveRow(query, userId, response);
});


// GET user/table
router.get("/table", (request, response) => {
    const query = userScripts.databaseTable;
    executeQuery(query, [], (err, results) => {
        sendResults(err, results, response);
    });
});


//GET user/rolenames
router.get("/rolenames", (request, response) => {
    response.send(userConstants.roleNames);
});


// GET user/:userId
router.get("/:userId", (request, response) => {
    const query = userScripts.retrieve;
    const { userId } = request.params;

    retrieveRow(query, userId, response);
});


router.get("/username/:username", (request, response) => {
    const query = userScripts.byUsername;
    const { username } = request.params;

    retrieveRow(query, username, response);
})

// GET user/role/:role
router.get("/role/:role", (request, response) => {
    var query = userScripts.retrieveByRole;
    const { role } = request.params;

    if (role == 0) {
        query = userScripts.databaseTable;
    }
    executeQuery(query, [role], (err, results) => {
        sendResults(err, results, response);
    });
});


// POST user/login
router.post("/login", (request, response) => {
    const { identity, password } = request.body;


    loginUser(request.body, response);
});


// POST user/register
router.post("/register", (request, response) => {
    const { password, verifyPassword } = request.body;
    if (password !== verifyPassword) {
        response.status(400).send("passwords don't match");
        return;
    }

    registerUser(request.body, response);
});


router.post("/ban", (request, response) => {
    const { userId, reason, dateUnbanned } = request.body;
    const banUser = banUserScripts.create;
    const { retrieve } = userScripts;

    executeQuery(retrieve, [userId], (err, user)=>{
        if(!user.length){
            response.status(400).send("user was not found");
            return;
        }

        executeQuery(banUser, [userId, reason, dateUnbanned, userId], (err, result)=>{
            sendResults(err, result, response);
        });
    });
});


// PUT user/ban/:userId
router.put("/setRole/:userId/:role", (request, response) => {
    const { retrieve, setRole } = userScripts;
    const { userId, role } = request.params;

    executeQuery(retrieve, [userId], (err, user) => {
        if (!user.length) {
            response.status(400).send("User was not found!");
            return;
        }
        executeQuery(setRole, [role, userId], (err, result) => {
            sendResults(err, result, response);
        });
    });
});

// PUT user/deactivate/:userId
router.put("/deactivate/:userId", (request, response) => {
    const { retrieveUser } = userScripts;
    const query = userScripts.deactivate;
    const { userId } = request.params;

    executeQuery(query, [userId], (err, results) => {
        if (err) {
            console.log(err);
            res.send(400);
            return;
        }
        executeQuery(retrieveUser, [userId], (err, byIdResults) => {
            sendResults(err, byIdResults, response);
        });
    });
});

// PUT user/:userId
router.put('/:userId', (request, response) => {
    const { userId } = request.params;
    const { username, firstName, lastName, role } = request.body;

    updateRow(userScripts, [username, firstName, lastName, role], userId, response);
});

module.exports = router;