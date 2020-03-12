const express = require("express"),
router = express.Router(),
fs = require("fs"),
{bookFilePath} = require('./../../util/file-util');




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
	console.log("fjeifowjfiowefj")
	const destinationPath = bookFilePath(req.params.bookId);

	fs.readdir(destinationPath, (err, files)=> {
		var chapterTitles = new Array();

		for(var i = 0; i < files.length; i++){
			var tokens = files[i].split('-');
			
			var fullFileName = tokens.slice(1)[0];
			var fileNameNoExt = fullFileName.split('.')[0];

			var chapterJSON = {number: tokens[0], name: fileNameNoExt.replace(/_/g, ' ')}
			chapterTitles.push(chapterJSON);
		}
		res.json(chapterTitles);
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