const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//Public Folder
app.use('/static', express.static(path.join(__dirname + '/public')));

// Returns a response to the client
app.use(("/sql/checkConnection"), function (req, res) { res.send(true) });


app.use("/user/", require("./routes/user/userRouter"));
app.use("/book/", require("./routes/book/bookRouter"));
app.use("/author/", require("./routes/author/authorRouter"));
app.use("/genre/", require("./routes/genre/genreRouter"));

app.use("/admin/", require("./routes/admin/adminRouter"));
app.use("/search/", require("./routes/search/searchRouter"));

app.use("/chapter/", require("./routes/chapter/chapterRouter"));

app.use("/upload/", require("./routes/upload"));


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

var port = 8080;
if (process.env.PORT !== undefined) {
  port = process.env.PORT;
}
//listen on same port listed in package.JSON
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//export this server
module.exports = app;