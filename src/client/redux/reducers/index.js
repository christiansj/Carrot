import {combineReducers} from "redux";
import {BookArrayReducer, BookReducer} from "./book-reducer";
import ConnectionStatusReducer from "./connection-reducer";
import DataViewContainer from "./create-container-reducer";
import HttpCodeReducer from "./http-code-reducer";

import DataReducer from "./data-reducer";
import DataArrayReducer from "./data/data-array-reducer";
import UserReducer from "./user";


const allReducers =  combineReducers({
  activeDataContainer: DataViewContainer,
  activeBook: BookReducer("activeBook"), 
  allBooks: BookArrayReducer("allBooks"),
  allGenres: DataArrayReducer("allGenres"),
  isConnected: ConnectionStatusReducer,
  activeRecord: DataReducer("activeRecord"),
  
  currentHttpCode: HttpCodeReducer,
  onlineUser: UserReducer("onlineUser")
});
export default allReducers;
