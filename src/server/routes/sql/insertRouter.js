const express = require("express"),
      router = express.Router(),
      dbSession = require("./../../modules/dbSession"),
      qMod = require("./../../modules/queryBuildModule"),
      bookMod = require("./../book/bookModule"),
      tableIdField = qMod.tableIdField,
      insertMod = require("./../../modules/sql/insertModule"),
      authMod = require("./../../modules/authorization/authorizationModule"),

      createInsertQuery = insertMod.createInsertQuery;
 

router.post("/:tableName/", function(req, res){
  
  var {tableName} = req.params;

  var query = createInsertQuery(tableName, req.body) + " ";

  if(req.params.tableName == "Book"){
    query += bookMod.insertBookGenre(req.body);
  }else if(req.params.tableName = "FacebookUser"){
    query = authMod.insertFacebook(req.body);
  }

  console.log(query);
   dbSession.connection.query(query, function(err, result){
      if(err) console.log("MYSQL ERROR: " + err);
      
    });
  res.sendStatus(200);
});



/****Debug this module here****/
// createInsertQuery("Book(", {title: "Green Eggs & Ham", description: "blah"});
// createInsertQuery("Genre(", {name: "Fantasy"});
/******************************/

module.exports = router;