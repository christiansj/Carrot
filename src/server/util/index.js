const { connection } = require('./../modules/dbSession');

function executeQuery(query, parameters = [], callback) {
  connection.query(query, parameters, function (err, result) {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}
module.exports.executeQuery = executeQuery;


function sendResults(err, results, response, isSendOne = false) {
  if (err) {
    response.sendStatus(500);
    return;
  }

  if (!results.length) {
    response.sendStatus(204);
  }
  else if (isSendOne) {
    response.json(results[0]);
  } else {
    response.json(results);
  }
}
module.exports.sendResults = sendResults;


module.exports.updateRow = function (scripts, parameters, id, response) {
  const { update, retrieve } = scripts;
  executeQuery(retrieve, [id], (err, foundResults) => {
    if (!foundResults.length) {
      response.status(400).send(`Update error: Initial data row was not found`);
      return;
    }

    executeQuery(update, [...parameters, id], (err, results) => {
      if (err) {
        console.log(err);
        response.status(500).send(err);
        return;
      }

      executeQuery(retrieve, [id], (err, retrieveResults) => {
        sendResults(err, retrieveResults, response);
      });
    });
  })
}


module.exports.deleteRow = function (scripts, id, response) {
  const { retrieve, deleteRecord } = scripts;

  executeQuery(retrieve, [id], (err, results) => {
    if (!results.length) {
      response.status(400).send(`Delete Error: Intitial data row was not found`);
      return;
    }

    executeQuery(deleteRecord, [id], (err, deleteResults) => {
      sendResults(err, deleteResults, response);
    });
  });
}


module.exports.retrieveRow = function (retrieveScript, id, response) {
  executeQuery(retrieveScript, [id], (err, results) => {
    if (!results.length) {
      response.status(400).send('Retrieve Error: Data row was not found');
      return;
    }
    sendResults(err, results, response, true);
  });
}