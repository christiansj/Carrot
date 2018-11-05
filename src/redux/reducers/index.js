import {combineReducers} from "redux";
import {BookArrayReducer, BookReducer} from "./book-reducer";
import ConnectionStatusReducer from "./connection-reducer";
import DataViewContainer from "./create-container-reducer";
import HttpCodeReducer from "./http-code-reducer";

import DataReducer from "./data-reducer";
import UserReducer from "./user-reducer";

const bookArrayReducers = combineReducers({
  allBooks: BookArrayReducer("allBooks")
});

const allReducers =  combineReducers({
  activeDataContainer: DataViewContainer,
  activeBook: BookReducer("activeBook"), 
  allBooks: BookArrayReducer("allBooks"),
  isConnected: ConnectionStatusReducer,
  activeRecord: DataReducer("activeRecord"),
  currentHttpCode: HttpCodeReducer,
  onlineUser: UserReducer("onlineUser")
});
export default allReducers;
