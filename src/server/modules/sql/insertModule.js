const qMod = require("./../queryBuildModule"),
	tableIdField = qMod.tableIdField;

const retrieveMod = require("./retrieveModule"),
foreignInsertVals = retrieveMod.foreignInsertValues;
/**
 * 
 * @param {String} recordTable name of the record's table
 * @param {String} otherTable name of the foreign table
 * @param {*} recordJSON      JSON object for record
 * @param {*} otherTableJSON 
 */
function insertForeign(recordTable, otherTable, recordJSON, otherTableJSON){
  var insertQuery = "INSERT INTO " + recordTable + otherTable;
  var fields = "(" + tableIdField(recordTable) + ", " + tableIdField(otherTable) + ") ";
  var values = "VALUES(" + foreignInsertVals(recordTable, recordJSON, otherTable, otherTableJSON)+  "); ";
  insertQuery += fields + values;

  return insertQuery;
}
module.exports.insertForeign = insertForeign;
/**
 * Creates an Insert MYSQL statement out of a
 * JSON object and the beginning of its insert QUERY.
 * 
 * @param {String} INSERT_INTO    "INSERT INTO <table name>" 
 * @param {JSON} jason      object that will be inserted in database
 * 
 * @returns {String} insertQuery
 * 
 * sample input: 
 *    INSERT_INTO = "INSERT INTO Book("
 *    jason = {title: "Green Eggs & Ham", description: "blah"}
 * sample result: 
 *    "INSERT INTO Book(title, description) VALUES('Green Eggs & Ham', 'blah');"
 */
function createInsertQuery(TABLE_NAME, jason){
   var insertQuery = "INSERT INTO " + TABLE_NAME + "(";

   var objectKeys = qMod.getObjectKeys(jason);
   var fieldString = qMod.separateWithStr(objectKeys, ",", false) + ") ";
   var valueString = qMod.createValueQuery(jason, Object.keys(jason));

   insertQuery += fieldString + valueString

   return insertQuery;
}
module.exports.createInsertQuery = createInsertQuery;
