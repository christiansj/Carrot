import React from "react";
import makeNotification from "client/services/notifications/notification-maker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import ApiService from 'client/services/Api';


/**
 * Ensures that the user wants to delete the passed in record by
 * asking
 * @param {JSON} record 
 * @param {Number} tableIndex 
 */
const RecordDelete = (record, tableName) => (
  <article>
    {deleteHeading(record.dataName)}
    <a href={`admin-dashboard/database/${tableName}`} className="btn btn-danger"
      onClick={() => handleDelete(record, tableName)}>
      DELETE
    </a>
  </article>
);

/**
 * 
 * @param {String} recordName 
 */
const deleteHeading = (recordName) => (
  <h1>
    <span style={{ color: 'red' }}>Delete </span>
    <span style={{ color: 'black' }}>{recordName}?</span>
  </h1>
)


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
function handleDelete(record, tableName) {
  new Promise(function (resolve, reject) {
    (new ApiService().execute("DELETE", `${tableName}/${record.id}`)).then(function(){
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