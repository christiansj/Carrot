/**
 * deleteModule.js
 * 
 * 
 */
const tableIdField = require("./../queryBuildModule").tableIdField;

/**
 * 	Given a table's name, returns a prepared statement
 * 	for deleting a record by its id.
 *	
 * 	@param {String}	tableName the record's table name
 * 
 *	Sample input: tableName = "Book"
 *	Sample result: "DELETE from Book WHERE bookId = ?;"
 *
 * 	@returns {String} deleteQuery
 */
 function  deleteById (tableName) {
	return "DELETE from " + tableName +
		" WHERE " + tableIdField(tableName) + " = ?; ";
}
module.exports.deleteById = deleteById;
/**
 * 
 * @param	{String}	tableName
 * @param {String}	otherTableName
 * @param {Boolean} isRecord1stTable
 */
module.exports.deleteForeign = function (tableName, otherTableName, isRecord1stTable) {
	var recordsTableName = getRecordsTableName(tableName, otherTableName, isRecord1stTable);
	return "DELETE from " + tableName + otherTableName +
		" WHERE " + tableIdField(recordsTableName) + " = ?; ";
}
/**
 * 
 * @param {String} tableName 
 * @param {String} otherTableName 
 * @param {Boolean} isRecord1stTable 
 */
function getRecordsTableName(tableName, otherTableName, isRecord1stTable) {
	if (isRecord1stTable) {
		return tableName;
	}
	return otherTableName;
}