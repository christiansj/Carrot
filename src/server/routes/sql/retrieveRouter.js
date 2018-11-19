const express = require("express"),
router = express.Router(),
dbSession = require("./../../modules/dbSession"),
bookMod = require("./../book/bookModule"),
authorMod = require("./../author/authorModule"),
genreMod = require("./../genre/genreModule"),
fbUserMod = require("./../facebook-user/facebookUserModule"),
fakeUserMod = require("./../../modules/fake-user/fakeUserModule");


/**
 * 
 */
router.get("/:table", function(req, res){
  dbSession.connection.query(getAllQuery(req.params.table), function(err, result){
    if(err) console.log("MYSQL ERROR: " + err);
  
    res.json(result);
  })  
});
/**
 * Given the table name (in plural form) returns 
 * the corresponding select all MYSQL statement.
 * @param {String} tableName
 */
function getAllQuery(tableName){
  switch(tableName){
    case "Author":
      return authorMod.SQL_SELECT_AUTHOR + " ORDER BY (lastName);";
    case "Book":
      return bookMod.SQL_SELECT_BOOK+" ORDER BY(title);";
    case "FacebookUser":
      return fbUserMod.SQL_SELECT_FB_USER + " ORDER BY(name)";
    case "Genre":
      return genreMod.SQL_SELECT_GENRE + " ORDER BY(name);";
    case "FakeUser":
      return fakeUserMod.SQL_FAKE_USER_DATA_TABLE + " ORDER BY(lastName);";
    default:
      throw Error("ERROR: Invalid tableName in getAll: " + tableName);
  }
}
module.exports = router;