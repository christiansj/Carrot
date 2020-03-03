const {executeQuery} = require('./../../../../util');
const bookAuthorScripts = require('./../../../../sql-scripts/bookAuthor');

async function insertBookAuthors(props={}){
    const {bookId, authorId, response} = props;
    const query = bookAuthorScripts.create;
    executeQuery(query, [bookId, authorId], (err, results)=>{
        if(err){
            console.log(err);
            response.status(400).send(err)
        }
    })
}

module.exports = insertBookAuthors;