/**
 * 
 * @param {*} name 
 * @param {*} book 
 */
export const setActiveBook = (name, book) => { 
  return {
    name: name,
    type: "SET_BOOK",
    payload: book
  }
}


/**
 * 
 * @param {} bookList 
 */
export const setActiveBookArray = (name, bookArray) =>{
  return {
    name: name,
    type: "SET_BOOK_ARRAY",
    payload: bookArray
  }
}
/**
 * 
 * @param {*} isRunning 
 */
export const setServerStatus = (isRunning) => {
    
    if(isRunning) return {type: "SERVER_ON"}
    return {type: "SERVER_OFF"};
}

export const setActiveCreateForm = (index) => {

  return{
    type: "SET_DATA_CONTAINER",
    payload: index
  }
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

export const setOnlineUser = (name, userJSON) => {
  return{
    name: name,
    type: "SET_ONLINE_USER",
    payload: userJSON
  }
}