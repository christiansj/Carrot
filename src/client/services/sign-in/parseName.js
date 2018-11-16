function parseName(name){

	var tokens = name.split(" ");
	
  var firstName = tokens[0];
	var lastName = "";
	if(tokens.length === 1)
		lastName = tokens[1];
	else if(tokens.length > 2){
		firstName = tokens[0] + " " + tokens[1];
		lastName = tokens[2];
		for(var i = 3; i < tokens.length; i++)
			lastName += " " + tokens[i];
	}
	return([firstName, lastName])
}

module.exports.parseName = parseName;