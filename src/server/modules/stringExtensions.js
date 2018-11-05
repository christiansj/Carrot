/**
 * Removes spaces from a string returning it as
 * one word.
 * 
 * If isCamelCase is true, the string will be
 * camel case formated.
 * 
 * 
 * @param {String} myString 
 * @param {boolean} isCamelCase 
 */
module.exports.removeSpaces = function(myString, isCamelCase){
  if(isCamelCase){
    var s = "";
    var tokens  = myString.split(' ');
    for(var i = 0; i < tokens.length; i++){
      //upper case word
      if(i > 0) tokens[i] = tokens[i][0].toUpperCase() + tokens[i].slice(1);
      
      s += tokens[i];
    }
    return s;
  }
  return myString.replace(/\s/g, '');
}