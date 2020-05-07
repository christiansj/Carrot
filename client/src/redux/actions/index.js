
/**
 * 
 * @param {*} isRunning 
 */
export const setServerStatus = (isRunning) => {
    
    if(isRunning) return {type: "SERVER_ON"}
    return {type: "SERVER_OFF"};
}


/**
 * Set the active record.
 * 
 * @param {String} dataName 
 * @param {JSON} data 
 */
export const setActiveRecord = (dataName, data) =>{
  return {
    name: dataName,
    type: "SAVE_DATA",
    payload: data
  }
}

export const setHttpCode = (httpCode) => {
  return{
    type: "SET_HTTP_CODE",
    payload: httpCode
  }
}


export const setDataArray = (dataArrayName, dataArray) => {
  return{
    name: dataArrayName,
    type: "SET_DATA_ARRAY",
    payload: dataArray
  }
}