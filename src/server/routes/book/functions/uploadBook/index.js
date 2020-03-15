const { executeQuery } = require('./../../../../util');
const bookScripts = require('./../../../../sql-scripts/book');
const bookAuthorScripts = require('./../../../../sql-scripts/bookAuthor');
const async = require('async');
const {getDirectoryHash} = require('./../../../../util/file-util');
const insertBookGenres = require('./../insertBookGenres/');

function uploadBookFunc(requestBody, response) {
    async.waterfall([
        function insertBook(callback) {
            const { uploadBook } = bookScripts;
            const { title, description, ISBN, authorId, genreNames } = requestBody;

            executeQuery(uploadBook, [title, description, ISBN, authorId], (err, uploadResult) => {
                if (err) {
                    callback(err, null)
                }
                const bookId = uploadResult.insertId;
                callback(null, requestBody, bookId)
            });
        },
        setFolderHash,
        insertAuthors,
        async.apply(insertBookGenres)
    ], function(err, finalResult){
        if(err){
            response.status(400).send(err)
        }else{
            response.send(finalResult.toString())
        }
    })
}
function setFolderHash(requestBody, bookId, callback){
    const folderHash = getDirectoryHash(bookId);
    const query = bookScripts.setFolderHash;
    executeQuery(query, [folderHash, bookId], (err, result)=>{
        if(err){
            callback(err, requestBody, bookId);
            return;
        }
        callback(null, requestBody, bookId);
    });
    
}
function insertAuthors(requestBody, bookId, callback){
    const {authorId} = requestBody;
    const query = bookAuthorScripts.create;
    executeQuery(query, [bookId, parseInt(authorId)], (err, results)=>{
        if(err){
            callback(err, null, null)
        }

        callback(null, requestBody, bookId)
    })
}

module.exports = uploadBookFunc;