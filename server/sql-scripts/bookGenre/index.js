const create = require('./create');
const booksInGenre = require('./booksInGenre');
const genresInBook = require('./genresInBook');
const genresWithBooks = require('./genresWithBooks')
module.exports = {
    booksInGenre,
    genresInBook,
    create,
    genresWithBooks
}