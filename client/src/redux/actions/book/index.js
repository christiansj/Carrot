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