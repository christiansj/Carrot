const fs = require("fs");
function getDirectoryHash(bookId){
	for(var directoryHash = 1; bookId < directoryHash * 1000; directoryHash++){
		if(bookId < directoryHash * 1000){
			return directoryHash;
		}
	}
}
module.exports.getDirectoryHash = getDirectoryHash;

module.exports.bookFilePath = function (bookId){
	const directoryHash = getDirectoryHash(bookId);
	
	const destinationPath = `./src/server/public/uploads/books/${directoryHash}/${bookId}/`;

	if(!fs.existsSync(destinationPath)){
		
		fs.mkdirSync(destinationPath);
	}
	return destinationPath;
}