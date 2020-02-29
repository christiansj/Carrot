const dotenv = require('dotenv');
dotenv.config({ path: __dirname + './../../../.env' });

var connection = require('mysql').createConnection({
  host: 'localhost', user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD, database: 'carrot',
  multipleStatements: true
});

module.exports.connection = connection;

module.exports.executeQuery =  function(query, parameters = [], callback){
  connection.query(query, parameters, function(err, result){
    if(err){
      callback(err,null);
    }else{
      callback(null, result);
    }
  });
}

module.exports.sendResults = function(err, results, response, isSendOne = false){
  if(err){
      response.send(400);
  }else{
    if(isSendOne){
      response.json(results[0]);
    }else{
      response.json(results);
    }
  }
}