//TODO clean this to accomodate for recent changes
const express = require("express"),
  multer = require("multer"),
  router = express.Router(),
  path = require("path"),
  {bookFilePath} = require('./../../util/file-util');
  ;
  const destinationPath = __dirname+"/uploadx";


// 

router.post("/book-cover/:bookId",  (request, response)=>{
  const {bookId} = request.params;
  var storage = multer.diskStorage({
    destination: function(req, file, callback){
      callback(null, bookFilePath(bookId))
    },
    filename: function (req, file, callback) {
      callback(null, "0" + path.extname(file.originalname));
    }
  });
  
  var upload = multer({
    storage: storage

  })
// .single("bookCover");
  .fields([{name: "bookCover", maxCount: 2}]);
  console.log(JSON.stringify(request.body))
  console.log(`req files ${JSON.stringify(request.files)}`)
    upload(request, response, function(err){
      if(err instanceof multer.MulterError){
        console.log("mutler err" + err);
      
      }else if(err){
        console.log(err)
        
      
      }
      console.log();
      console.log(`req files ${JSON.stringify(request.files)}`)
      response.send("ok")
    })
    
   
    
    
});

module.exports = router;