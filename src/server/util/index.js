const { connection } = require('./../modules/dbSession');

function executeQuery(query, parameters = [], callback) {
  connection.query(query, parameters, function (err, result) {
    if (err) {
      if(process.env.NODE_ENV !== 'test'){
        console.log(err);
      }
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}
module.exports.executeQuery = executeQuery;


function sendResults(err, results, response, isSendOne = false) {
  if (err) {
    response.status(500).send(err);
    return;
  }
  // for POST requests
  if(typeof(results) === 'object' && results.insertId !== undefined){
    response.status(201).json({insertId: results.insertId});
    return;
  }

  if (!results.length) {
    response.sendStatus(204);
    return;
  }
  else if (isSendOne) {
    response.json(results[0]);
    return;
  } else {
    response.json(results);
    return;
  }
}
module.exports.sendResults = sendResults;


module.exports.updateRow = function (retrieveScript, updateScript, parameters, id, response) {

  executeQuery(retrieveScript, [id], (err, foundResults) => {
    if (!foundResults.length) {
      response.status(404).send(`Update error: Initial data row was not found`);
      return;
    }

    executeQuery(updateScript, [...parameters, id], (err, results) => {
      if (err) {
        console.log(err);
        response.status(500).send(err);
        return;
      }

      executeQuery(retrieveScript, [id], (err, retrieveResults) => {
        if(err){
          console.log(err)
        }
        sendResults(err, retrieveResults, response);
      });
    });
  })
}


module.exports.deleteRow = function (retrieveScript, deleteScript, id, response) {
 

  executeQuery(retrieveScript, [id], (err, results) => {
    if (!results.length) {
      response.status(404).send(`Delete Error: Intitial data row was not found`);
      return;
    }

    executeQuery(deleteScript, [id], (err, deleteResults) => {
      sendResults(err, deleteResults, response);
    });
  });
}


module.exports.retrieveRow = function (retrieveScript, id, response) {
  executeQuery(retrieveScript, [id], (err, results) => {
    if (!results.length) {
      response.status(404).send('Retrieve Error: Data row was not found');
      return;
    }
    sendResults(err, results, response, true);
  });
}

module.exports.uniqueCheck = function(props = {}){
  const {fieldName, value, scripts, response} = props;
  const uniqueFields = Object.keys(scripts.unique);

  if(!uniqueFields.find(item=>item===fieldName)){
      response.status(400).send(`UNIQUE field "${fieldName}" does not exist in table`);
      return;
  }

  const uniqueQuery = scripts.unique[fieldName];
  executeQuery(uniqueQuery, [value], (err, results)=>{
      if(!results.length){
          response.status(204).send();
      }else{
          response.status(200).send();
      }
  });
}