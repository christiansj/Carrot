const express = require('express'),
logger = require('morgan'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
path = require('path'),
cors = require('cors')
formData = require('express-form-data');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(logger('dev'));
app.use(express.json());

app.use(formData.parse());
app.use(cookieParser());
//Public Folder
app.use(express.static(path.join(__dirname, './public')));
//app.set('views', path.join(__dirname, './views'));
//app.set('view engine', 'pug');

// Returns a response to the client
app.use(("/sql/checkConnection"), function(req,res){res.send(true)});


app.use("/user/", require("./routes/user/userRouter"));
app.use("/book/", require("./routes/book/bookRouter"));
app.use("/author/", require("./routes/author/authorRouter"));
app.use("/genre/", require("./routes/genre/genreRouter"));

app.use("/admin/", require("./routes/admin/adminRouter"));
app.use("/search/", require("./routes/search/searchRouter"));
/**file router */
// app.use("/upload/", require("./routes/upload"));
// app.use("/fileUpload/", require("./routes/file-upload/fileUploadRouter"));

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
app.listen(process.env.PORT || 8080, ()=>{
  console.log(`listening on ${process.env.PORT}`);
});

//export this server
module.exports = app;