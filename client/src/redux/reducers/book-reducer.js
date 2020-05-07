

/**
 * Reducer for a Book
 * @param {*} state 
 * @param {*} action 
 */

function BookReducer(bookName = ''){
  return function(state = null, action){
    const {name} = action;
     if(name !== bookName) return state;
  
     switch(action.type){
      case "SET_BOOK":
        return action.payload;
      case "CLEAR_BOOK":
        return null;
      default:
        return state;
    }

  }
}

/**
 * Reducer for an array of Books
 * @param {*} state 
 * @param {*} action 
 */

function BookArrayReducer(listName = ''){
  return function bookList(state = [{key4: "val5", key5: "val8"}], action){
    const {name} = action;
    if(name !== listName) return state;

    if(action.type === "SET_BOOK_ARRAY"){
      return action.payload;
    }else return state;
  }
}

//exports
module.exports.BookReducer = BookReducer;
module.exports.BookArrayReducer = BookArrayReducer;