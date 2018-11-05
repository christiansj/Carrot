import React from "react";
/**
 * 
 * @param {String} recordName 
 */
const deleteHeading = (recordName) => (
  <h1>
    <span style={{ color: 'red' }}>Delete </span>
    <span style={{ color: 'black' }}>{recordName}</span>
  </h1>
)
/**
 * Ensures that the user wants to delete the passed in record by
 * asking
 * @param {JSON} record 
 * @param {Number} tableIndex 
 */
const RecordDelete = (record, tableIndex) => (
  <article>
    {deleteHeading(record.dataName)}
    <a href="/e/" className="btn btn-danger"
      onClick={() => handleDelete(record, tableIndex)}>
      DELETE
    </a>
  </article>
);

/**
 * Invokes a DELETE method for deleting the passed
 * in record. Sends the record object and the tableIndex
 * to the server.
 * 
 * TODO: A notification window fades in incidcating the record
 * that was deleted
 * @param {JSON} record 
 * @param {Number} tableIndex 
 */
function handleDelete(record, tableIndex) {
  new Promise(function (resolve, reject) {
    (fetch("/deleteData/" + tableIndex + "/" + record.id, {
      method: "DELETE"
    }));
  })
}

export default RecordDelete;