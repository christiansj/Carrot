const express = require('express'),
logger = require('morgan'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
path = require('path'),
multer = require("multer");

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//PUblic Folder
app.use(express.static(path.join(__dirname, './public')));
//app.set('views', path.join(__dirname, './views'));
//app.set('view engine', 'pug');

// Returns a response to the client
app.use(("/sql/checkConnection"), function(req,res){res.send(true)});

/**CRUD routers*/
app.use("/e/getAll/", require("./routes/sql/retrieveRouter"));
app.use("/createData/", require("./routes/sql/insertRouter"));
app.use("/deleteData/", require("./routes/sql/deleteRouter"));

app.use("/facebookUser/", require("./routes/facebook-user/facebookUserRouter"));
app.use("/fileUpload/", require("./routes/file-upload/fileUploadRouter"));
// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
  throw (new Error(err.message));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send(false);
  res.render('error');
});

//listen on same port listed in package.JSON
app.listen(process.env.PORT || 8080);

//export this server
module.exports = app;