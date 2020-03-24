const express = require("express");
const  multer = require("multer");
const  router = express.Router();
const  path = require("path");
const  { bookFilePath } = require('./../../util/file-util');

router.post("/book-cover/:bookId", (request, response) => {
  const { bookId } = request.params;
  var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, bookFilePath(bookId))
    },
    filename: function (req, file, callback) {
      callback(null, "cover" + path.extname(file.originalname));
    }
  });

  var upload = multer({
    storage: storage
  })
    .fields([{ name: "bookCover", maxCount: 2 }]);

  upload(request, response, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("mutler err" + err);

    } else if (err) {
      console.log(err)

    }
    response.send("ok")
  })
});

module.exports = router;