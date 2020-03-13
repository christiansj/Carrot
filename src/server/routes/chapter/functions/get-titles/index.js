
const fs = require("fs");
const {bookFilePath} = require('./../../../../util/file-util');

function getChapterTitles(bookId, response){
    const destinationPath = bookFilePath(bookId);
    console.log('boo ' + destinationPath)
	fs.readdir(destinationPath, (err, files)=> {
		var chapterTitles = new Array();

		for(var i = 0; i < files.length; i++){
			var tokens = files[i].split('-');
			
			var fullFileName = tokens.slice(1)[0];
			var fileNameNoExt = fullFileName.split('.')[0];

			var chapterJSON = {number: tokens[0], name: fileNameNoExt.replace(/_/g, ' ')}
			chapterTitles.push(chapterJSON);
		}
		response.json(chapterTitles);
	});	
}

module.exports = getChapterTitles;