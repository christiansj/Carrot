const config = require('./../../../config/sql-signin');


 var connection = require('mysql').createConnection({
   host: 'localhost', user: config.USERNAME, 
   password: config.PASSWORD, database: 'bobsbooks',
   multipleStatements: true
 });

 module.exports.connection = connection;