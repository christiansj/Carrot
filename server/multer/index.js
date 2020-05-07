
const multer = require("multer");
const path = require('path');
/**the default beginning of a file's destionation*/
const destinationPath = "./public/uploads/books/";

const storage = multer.diskStorage({
  destination: destinationPath,
  filename: function (req, file, callback) {
    callback(null, file.originalname + "." + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
