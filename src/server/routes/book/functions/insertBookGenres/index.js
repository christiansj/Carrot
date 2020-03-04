const {executeQuery} = require('./../../../../util');
const bookGenreScripts = require('./../../../../sql-scripts/bookGenre');

async function createParameters(props={}){
    const {bookId, genreNames} = props;
    var params = [];
    for(var i = 0; i < genreNames.length; i++){
        params.push(bookId);
        params.push(genreNames[i]);
    }
    console.log(`params are ${params}`)
    return params;
}
async function insertBookGenres(props={}){
    
    const {bookId, genreNames} = props;
   
    if(!genreNames.length){
        return;
    }
    const query = bookGenreScripts.create(genreNames);

    createParameters({bookId, genreNames})
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