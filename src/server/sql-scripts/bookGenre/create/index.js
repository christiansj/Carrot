/**
 * 
 * @param {Number} bookId 
 * @param {Array<Number>} genreIds 
 */
function create(genreIds){
    var query = `
        INSERT INTO BookGenre(bookId, genreId)
        VALUES(?, ?)
    `;
    for(var i = 1; i < genreIds.length; i++){
        query += ", \n(?,?)"
    }

    return query + ";";
}
module.exports = create;