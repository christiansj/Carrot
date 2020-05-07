const dotenv = require('dotenv');
dotenv.config({ path: __dirname + './../.env' });

var connection = require('mysql').createConnection({
  host: 'localhost', user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD, database: 'mock_carrot',
  multipleStatements: true
});

module.exports.connection = connection;
