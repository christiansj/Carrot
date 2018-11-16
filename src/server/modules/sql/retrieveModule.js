const tableIdField = require("./../queryBuildModule").tableIdField,
qMod = require("./../queryBuildModule");
function selectById(tableName){
	return "SELECT " + tableIdField(tableName) + " FROM " + tableName;
}
function selectByIdWhere(tableName, recordJSON){
	return selectById(tableName) + " WHERE " + qMod.separateWithAnd(recordJSON) + "";
}
function selectByIdWhereOR(tableName, recordJSONs){
	return selectById(tableName) + " " +  whereOr(recordJSONs) + ")";
}
module.exports.selectByIdWhere = selectByIdWhere;
module.exports.selectByIdWhereOR = selectByIdWhereOR;

module.exports.foreignInsertValues = function(recordTable, recordJSON, otherTable, otherJSON){
	var query = "("+selectByIdWhere(recordTable, recordJSON)+"),\n ";
	query += "("+selectByIdWhere(otherTable, otherJSON) + ")";
	return query;
}

function whereOr(jsonArray){
	var query = "WHERE(";
	for(var i = 0; i < jsonArray.length; i++){
		query += qMod.separateWithAnd(jsonArray[i]);
		if(i+1 != jsonArray.length){
			query += " OR ";
		}
	}
	return query.replace(/AND/g, "OR");
}

module.exports.lastInsertId = function(tableName){
	return selectById(tableName) + " WHERE " + qMod.tableIdField(tableName) + " = LAST_INSERT_ID()";
}