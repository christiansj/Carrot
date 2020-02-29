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
  } else {
    if (!results.length) {
      response.sendStatus(204);
    }
    else if (isSendOne) {
      response.json(results[0]);
    } else {
      response.json(results);
    }
  }
}
module.exports.sendResults = sendResults;

module.exports.updateRow = function (scripts, parameters, id, response) {
  const { update, retrieve } = scripts;
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
}