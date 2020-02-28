const getABooksAuthors = require('./scripts/getABooksAuthors/');
const dataTable = require('./scripts/datatable');
const bookById = require('./scripts/bookById');

 module.exports = {
    bookById,
    dataTable, 
    getABooksAuthors,
 };