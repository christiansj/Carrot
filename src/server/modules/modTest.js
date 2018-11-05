const dbSession = require("./dbSession");

dbSession.connection.query("SELECT bookId from Book WHERE title = 'Young Son'", function(result, error){
	if(error && result != null){
		console.log("ERROR: " + error);
	} 

	console.log("result is " + result);
})