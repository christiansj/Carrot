const genreIdFromName = "(SELECT genreId from Genre WHERE name = ?)";
/**
 * 
 * @param {Number} bookId 
 * @param {Array<Number>} genreIds 
 */
function create(genreIds){
    var query = `
        INSERT INTO BookGenre(bookId, genreId)
        VALUES(?, ${genreIdFromName})
    `;
    for(var i = 1; i < genreIds.length; i++){
        query += `, \n(?,${genreIdFromName})`
    }

    return query + ";";
}
module.exports = create;