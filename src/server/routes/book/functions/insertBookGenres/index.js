const {executeQuery} = require('./../../../../util');
const bookGenreScripts = require('./../../../../sql-scripts/bookGenre');

async function createParameters(props={}){
    const {bookId, genreIds} = props;
    var params = [];
    for(var i = 0; i < genreIds.length; i++){
        params.push(bookId);
        params.push(genreIds[i]);
    }
    console.log(`params are ${params}`)
    return params;
}
async function insertBookGenres(props={}){
    
    const {bookId, genreIds} = props;
   
    if(!genreIds.length){
        return;
    }
    const query = bookGenreScripts.create(genreIds);

    createParameters({bookId, genreIds})
    .then(params=>{
        executeQuery(query, params, (err,results)=>{
            if(err){
                console.log(err)
            }else{
                console.log(results);
            }
        });
    });
   

}
module.exports = insertBookGenres;