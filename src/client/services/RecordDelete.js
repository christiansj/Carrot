import React from "react";
import makeNotification from "./notifications/notification-maker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
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
    })).then(function(){
      var message = (
        <span>
          {record.dataName + " was delete!"} 
          <FontAwesomeIcon icon={faTrashAlt}/>
        </span>
      )
      makeNotification("card1", message)
    });
  })
}

export default RecordDelete;