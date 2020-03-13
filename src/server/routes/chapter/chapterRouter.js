const express = require("express");
const router = express.Router();
const fs = require("fs");
const {bookFilePath} = require('./../../util/file-util');
const {executeQuery} = require('./../../util');
const bookScripts = require('./../../sql-scripts/book');
const {getChapterTitles} = require('./functions');




router.get("/single/:bookId/:chapterNumber", (req, res)=> {
	const destinationPath = bookFilePath(req.params.bookId);
	
	fs.readdir(destinationPath, (err, files)=> {
		var fileName = "";

		//find the file to get content from
		for(var i = 0; i < files.length; i++){
			
			if(files[i].split('-')[0] === req.params.chapterNumber){
				fileName = files[i];
				break;
			}
		}

		// read file content's in, send it to the client
		fs.readFile(`${destinationPath}${fileName}`, (err, data)=> {
			if(err){				
				throw err;
			}else{
				res.send([data.toString()]);
			}
		});
	});
});


/**
*	/getChapters/:bookID
*	@body.param {Integer} bookId 	
*/
router.get("/titles/:bookId/", (req, res)=> {
	const {bookId} = req.params;
	const {retrieve} = bookScripts;
	executeQuery(retrieve, [bookId], (err, book)=>{
		if(!book.length){
			res.status(400).send("Could not find book");
			return;
		}
		getChapterTitles(bookId, res);
	});
	
});
router.post("/saveDraft/:bookId/:chapterNumber", (req, res)=> {

});
router.post("/upload/:bookId/:chapterNumber", (req, res)=> {
	const chapterFileName = req.body.chapterTitle.replace(/\s/, "_");
	const destinationPath = bookFilePath(req.params.bookId);
	const {chapterNumber} = req.params;
	console.log(`${destinationPath}${chapterNumber}-${chapterFileName}.txt`);
	fs.writeFile(`${destinationPath}${chapterNumber}-${chapterFileName}.txt`,
		req.body.chapterContent, (err)=> 
		{
			if(err) throw err; 
			console.log("chapter uploaded successfully")
		}
	);
	res.send("ok");
});

module.exports = router;