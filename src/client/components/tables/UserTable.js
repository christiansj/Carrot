import React from "react";

import store from "client/redux/stores/";
import { setActiveRecord } from "client/redux/actions/"
/**
 * 
 * @param {JSON} data 
 */
function UserTable(data, classStyle) {
  if(data == null || data.length <= 0){
    return null;
  }
  return (
    <table className={"table " + classStyle} id="DataTable" style={{ marginTop: '15px', border: '1px solid black' }}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((keyName, index) => {
            if (keyName !== "dataName")
              return (<th key={keyName + index}>{keyName}</th>)
            return null;
          })}
          <th />
        </tr>
      </thead>
      <tbody>
        {createRows(data)}
      </tbody>
    </table>
  )
}

const createRow = (data) => {
  return (
    Object.keys(data).map((item, index) => {
      if (index === 0) {
        return (
          <td key={item + index}>
            <a href={"/user/"+data.username} onClick={() => store.dispatch(setActiveRecord("activeRecord", data))}>{data[item]}</a>
          </td>
        )
      }
      return (
        <td key={item + index}>
          {data[item]}
        </td>
      )
    })
  )
}

/**
 * 
 * @param {JSON} data 
 */
const createRows = (dataJSONs) => (
  dataJSONs.map((item, index) => {
    return (
      <tr key={"link" + index}>
        {createRow(item)}
      </tr>
    )
  })
);

export default (UserTable);