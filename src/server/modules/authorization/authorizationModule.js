const insertMod = require("./../sql/insertModule"),
parseName = require("./../../../client/services/sign-in/parseName").parseName,
lastInsertId = require("./../sql/retrieveModule").lastInsertId,
selectByIdWhere = require("./../sql/retrieveModule").selectByIdWhere;

module.exports.insertFacebook = function(fbJason){
  var query  = insertAuthorizationQuery(fbJason.mediaName, fbJason);
  query += insertUserQuery(fbJason);
  query += insertUserAuthorizationQuery(fbJason.fbID)
 
  return query ;
  
}

function insertAuthorizationQuery(mediaName, mediaJason){
  const authRecord = {
    authorizationId: mediaJason.fbID,
    networkName: mediaName,
    email: mediaJason.email
  };
  return insertMod.createInsertQuery("Authorization", authRecord);
}

function insertUserQuery(jason){
  const nameTokens = parseName(jason.name);
  const userRecord = {
    firstName: nameTokens[0],
    lastName: nameTokens[1]
  };
  return insertMod.createInsertQuery("User", userRecord);;
}

function insertUserAuthorizationQuery(authorizationId){
  const foreignQuery = "INSERT INTO UserAuthorization(userId, authorizationId)";
  const foreignValues = "VALUES((" +  lastInsertId("User") + "), (" + selectByIdWhere("Authorization", {authorizationId: authorizationId}) + "));";
  return foreignQuery + foreignValues;
}
