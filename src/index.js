import React from "react";
import  ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/stores";
import App from "./app";
import "./styles.css";
/**
 * Where the application renders
 */
ReactDOM.render(    
  <Provider store={store}>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    
  </Provider>, 
document.getElementById("root"));
