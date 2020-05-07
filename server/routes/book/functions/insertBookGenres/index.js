const {executeQuery} = require('./../../../../util');
const bookGenreScripts = require('./../../../../sql-scripts/bookGenre');

async function createParameters(bookId, genreNames){
    
    var params = [];
    console.log(`genres are ${genreNames}`)
    for(var i = 0; i < genreNames.length; i++){
        params.push(bookId);
        params.push(genreNames[i]);
    }
    console.log(`params are ${params}`)
    return params;
}
function insertBookGenres(requestBody, bookId, callback){
    console.log(`i got ${JSON.stringify(requestBody)}`)
    const {genreNames} = requestBody;
    console.log()
    if(!genreNames.length){
        return;
    }
    const query = bookGenreScripts.create(genreNames);

    createParameters(bookId, genreNames)
    .then(params=>{
        executeQuery(query, params, (err,results)=>{
            if(err){
                callback(err, null);
            }else{
                callback(null, bookId);
            }
        });
    });

}
module.exports = insertBookGenres;