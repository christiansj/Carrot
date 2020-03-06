import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./client/redux/stores";
import App from "./app";
import "./styles.css";

/**
 * Where the application renders
 */
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);