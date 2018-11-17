const express = require("express"),
multer = require("multer"),
router = express.Router(),
path = require("path");

//Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, callback){
    callback(null, file.fieldname + '-' + Date.now() 
    + path.extname(file.originalname));
  }
})

function createFileName(req, file, callback){
  

}

router.post("/picture/", (req, res )=> {
  const upload = multer({
    storage: storage,
    
   
  }).single("sampleImage");

  upload(req, res, (err)=> {
    if(err){
      res.send(err);
    }else{
      console.log(req.file);
      res.send("test");
    }
  })
})

module.exports = router;