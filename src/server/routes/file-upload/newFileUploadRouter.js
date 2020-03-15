//TODO clean this to accomodate for recent changes
const express = require("express"),
  multer = require("multer"),
  router = express.Router(),
  path = require("path"),

  dbSession = require("./../../modules/dbSession"),
  fs = require("fs"),

  { executeQuery } = require('./../../util');
;

/**the default beginning of a file's destionation*/
const destinationPath = "./public/uploads/books/";

const storage = multer.diskStorage({
  destination: destinationPath,
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
});



/**
TODO 
*/
router.post("/book-upload/", upload.single('book-cover'),  (req, res)=> {

  dbSession.connection.query("CALL uploadBook(?, ?, ?)", [req.body.bookTitle, req.body.description, req.body.fbID], (err, result)=>{
   if(err){
     console.log(err)
   }
  });

  dbSession.connection.query(bookMod.insertBookGenre(req.body), (err, result)=> {
    if(err){
      console.log(err)
    }
  });


  dbSession.connection.query("SELECT bookId from Book WHERE bookId = LAST_INSERT_ID();", (err, result)=> {
    if(err){
      console.log(err);
    }
    moveUploadedFile(req, result[0].bookId);
  });

  res.send("upload was successful");
});

function makeNewBookCoverPath(req, bookId) {
  var newFilePath = "";
  for (var directoryHash = 1; bookId < directoryHash * 1000; directoryHash++) {
    if (bookId < directoryHash * 1000) {

      newFilePath = `${destinationPath}${directoryHash}/${bookId}/0${path.extname(req.file.originalname)}`;
      if (!fs.existsSync(`${destinationPath}${directoryHash}`)) {
        fs.mkdirSync(`${destinationPath}${directoryHash}`)
      }
      if (!fs.existsSync(`${destinationPath}${directoryHash}/${bookId}/`)) {
        fs.mkdirSync(`${destinationPath}${directoryHash}/${bookId}/`)
      }
      var imagePath = `uploads/books/${directoryHash}/${bookId}/`;
      executeQuery(`UPDATE Book SET imagePath = ? WHERE bookId = ?;`, [imagePath, bookId],
        (err, result) => {
          if (err) {
            console.log(err);
          }

        })

      return newFilePath;
    }
  }
}
/**
* @param {JSON} req
*/
function moveUploadedFile(req, bookId) {
  // ./public/uploads/books/<file-name>
  var originalFilePath = destinationPath + req.file.originalname;

  //move the image to its official file location
  fs.rename(originalFilePath, makeNewBookCoverPath(req, bookId),
    (err) => {
      if (err) {
        console.log(err)
      }
    });
}

//Traversity tutorial
router.post("/picture/", (req, res) => {
  const upload = multer({
    storage: storage,

  }).single("sampleImage");

  upload(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      console.log(req.file);
      res.send("test");
    }
  })
})

module.exports = router;