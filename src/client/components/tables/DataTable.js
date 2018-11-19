import React from "react";
import { Link } from "react-router-dom";

import store from "client/redux/stores/";
import { setActiveRecord } from "client/redux/actions/"
import { setActiveBook } from "client/redux/actions/";
/**
 * 
 * @param {JSON} data 
 */
const DataTable = (data, classStyle, renderLinks) => (
  <table className={"table " + classStyle} id="DataTable" style={{ marginTop: '15px', border: '1px solid black' }}>
    <thead>
      <tr>
        {Object.keys(data[0]).map((keyName, index) => {
          if (keyName !== "dataName")
            return (<th key={keyName+index}>{keyName}</th>)
        })}
        <th />
      </tr>
    </thead>
    <tbody>
      {createRows(data, renderLinks)}
    </tbody>
  </table>
)



/**
 * 
 * @param {JSON} data 
 */
const createBookLinks = (data, renderLinks) => {
  if(!renderLinks){
    return;
  }
  return (
    <td>
    <Link to={"/u/" + data.title}
      className="btn btn-success btn-sm"
      onClick={() => store.dispatch(setActiveBook("activeBook", data))}>
      Edit
    </Link>
    {DeleteButton(data)}

  </td>
  )
}
 


const createRow = (data) => (
  Object.keys(data).map((item, index) => {
    if (item !== "dataName")
      return (
        <td key={item + index}>
          {data[item]}
        </td>
      )
  })
)

/**
 * 
 * @param {JSON} data 
 */
const createRows = (dataJSONs, renderLinks) => (
  dataJSONs.map((item, index) => {
    return (
      <tr key={"link" + index}>
        {createRow(item)}
        {createBookLinks(item, renderLinks)}
      </tr>
    )
  })
);
/**
 * 
 * @param {JSON} dataJSON 
 */
const DeleteButton = (dataJSON) => (
  <button
    className="btn btn-danger btn-sm" type="button"
    data-toggle="modal" data-target="#deleteModal"
    onClick={() => store.dispatch(setActiveRecord("activeRecord", dataJSON))}
  >Delete
  </button>
);
export default (DataTable);