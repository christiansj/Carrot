/**
 * queryBuildModule.js
 * 
 * Contains export functions that simplifies 
 * building MYSQL query strings. Can be used
 * in production of other projects / applications.
 * 
 * @author Christian San Juan
 ******/

//imports
const strExtend = require("./stringExtensions");

/**
 * Returns the string param embedded by 
 * single quotes.
 * @param {string} string 
 * @return {string}
 */
function quoteString(string) {
  return "\'" + string + "\'";
}
module.exports.quoteString = quoteString;
/**
 * Inserts str between array's elements.
 * Shorthand for listing fields in INSERT INTO & VALUES queries.
 * 
 * @param {array} array       array of strings
 * @param {string} separator        string that will separate array's elements
 * @param {boolean} isQuotes  if true, single quote every element 
 * 
 * @return {string}
 * 
 * sample input: (["red", "blue", "yellow"], "!", true)
 * sample return: " 'red'! 'blue'! 'yellow' "
 */
 
function separateWithStr (array, separator, isQuotes) {
  let string = ""
  for (var i = 0; i < array.length; i++) {
    if (isQuotes){
      array[i] = quoteString(array[i]);
    } 
    
    //don't add separator after the last element
    (i !== array.length - 1)
      ? string += (array[i] + separator + " ")
      : string += (array[i]);
  }
  return string;
}
module.exports.separateWithStr = separateWithStr;
/**
 * Returns a string of the passed in object's
 * "key=value and key=value" 
 * @param {object} jason 
 * @return {string}
 * 
 * sample input   ({name: 'Bill', age: 12})
 * sample return: 'name'='Bill' AND 'age' = '12'
 */
module.exports.separateWithAnd = function (jason) {
  let array = [];

  for (var i = 0; i < Object.keys(jason).length; i++) {
    let key = Object.keys(jason)[i];
    let elem = key + " = " + quoteString(jason[key]);
    array.push(elem);   //"key = val"
  }
  return separateWithStr(array, " AND", false);
}

/**
 * Given a request's JSON, properly formats its keys
 * by removing spaces and omitting elements with '.' chars.
 * 
 * Returns the object's true fields for MYSQL statements.
 * 
 * sample JSON:
 * {
 *    "first name": "blah",
 *    "last name": "blah",
 *    "occupation": "blah",
 *    "the.age": 23 
 * }
 * sample result: ["firstName", "lastName", occupation]
 * TODO: dotted only boolean
 * @param {JSON} jason 
 * @return {array}
 */
module.exports.getObjectKeys = function(jason){
  let array = [];
 
  for(var i = 0; i < Object.keys(jason).length; i++){
    var key = Object.keys(jason)[i];
  
    if(key.includes('.')){  
      continue;
    }else if(key.includes("\s")){  
      key = strExtend.removeSpaces(key, true);
    }
    array.push(key);
  }
  return array;
}
/**
 * Returns the values of an object
 * 
 * sample input: 
 *    jason = {firstName: "bob", lastName: "miller", age: 43, occupation: "N/A"}
 *    keys = ["firstName", "lastName"]
 *    result: ["bob", "miller"]
 * 
 * TODO: dottedOnly boolean
 * @param {JSON} jason 
 * @param {array} keys 
 */
function getValues(jason, keys){
  let vals = [];
  //
  for(var i = 0; i < keys.length; i++){

    if(keys[i].includes(".") && true) //<- !dottedOnly
      continue;
    let valString = quoteString(jason[keys[i]]);
    vals.push(valString);
  }
  return vals;
}
module.exports.getValues = getValues;

module.exports.getDottedValues = function(jason, keys){
  let vals = [];
  for (var i = 0; i < keys.length; i++){
    if(keys[i].includes(".")){
      let val = keys[i].split(".")[1];

      vals.push(val);
    }
  }
  return vals;
}


/**
 * Returns a value string for the passed
 * in object and its specified keys.
 * @param {Object} jason 
 * @param {Array} keys 
 */
  module.exports.createValueQuery =function(jason, keys){
  return "VALUES("+getValues(jason, keys)+");";
}
 

/**
* 
* @param {String} tableName
*/
module.exports.tableIdField = function(tableName){
  return tableName[0].toLowerCase() 
            + tableName.slice(1) + "Id";
}