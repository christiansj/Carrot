const express = require("express"),
router = express.Router(),
dbSession = require("./../../modules/dbSession"),
fakeUserMod = require("./../../modules/fake-user/fakeUserModule");

/**
 * 
 */
router.get("/isBanned/", (req, res) => {
  dbSession.connection.query(fakeUserMod.SQL_SELECT_BANNED, [6], (err, result) => {
    if(err){
      console.log(err)
    }
    res.json(result);
  });
});

module.exports = router;