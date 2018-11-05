const qMod = require("./../../modules/queryBuildModule"),
  retrieveMod = require("./../../modules/sql/retrieveModule"),
  deleteMod = require("./../../modules/sql/deleteModule"),
  dbSession = require("./../../modules/dbSession");

/**
 * Retrieve entire an entire book (including authors and genres)
 *  
 */
const SQL_SELECT_BOOK =
  "SELECT b.bookId as id, b.title, b.title as dataName, b.description, a.firstName, a.lastName, g.name as genre "
  + "from Book b, Author a, BookAuthor ba, Genre g, BookGenre bg "
  + "WHERE b.bookId = ba.bookId and a.authorId = ba.authorId and bg.bookId = b.bookId and g.genreId = bg.genreId";
module.exports.SQL_SELECT_BOOK = SQL_SELECT_BOOK;


/**
 * Get book by title query
 * 
 */
module.exports.SQL_BOOK_BY_TITLE = SQL_SELECT_BOOK.concat(" WHERE b.title = ?;");

/**
 * Get book by author query
 *  
 */
module.exports.SQL_BOOK_BY_AUTHOR = SQL_SELECT_BOOK.concat(", Author a, BookAuthor ba",
  " WHERE a.authorId = ba.authorId and b.bookId = ba.bookId and a.firstName = ? and a.lastName = ?;");

/**
 *   
 * @param {Number} bookId 
 */
module.exports.deleteBook = function (bookId) {
  var deleteQuery = deleteMod.deleteForeign("Book", "Author", true);
  deleteQuery += deleteMod.deleteForeign("Book", "Genre", true);
  deleteQuery += deleteMod.deleteById("Book");

  dbSession.connection.query(deleteQuery, [bookId, bookId, bookId], function (err, result) {
    if (err) { console.log(err) }
  });

  return true;
}

/**
*    
* @param {JSON} bookJSON
*/
module.exports.insertBookGenre = function (bookJSON) {
  query = "";
  const genres = qMod.getDottedValues(bookJSON, Object.keys(bookJSON));

  //INSERT INTO BookGenre
  genres.forEach(function (genre) {
    query += "INSERT INTO BookGenre(bookId, genreId) VALUES(";
    query += "(" + retrieveMod.selectByIdWhere("Book", { "ISBN": bookJSON.ISBN }) + "), ";
    query += "(" + retrieveMod.selectByIdWhere("Genre", { "name": genre }) + ")); ";
  });
  return query;
}