import React, { Component } from "react";
import SiteHeader from "./components/header/SiteHeader.jsx";
import SiteRoutes from "./routes/routes";
import store from "./redux/stores/index";
import ErrorScene from "./scenes/errors/ErrorScene";

import "popper.js";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setServerStatus, setHttpCode } from "./redux/actions/index";

import notificationContainer from "./components/sections/notification-section";
class App extends Component {
  //id for server status interval timer
  state = { checkerId: null };

  /**
   * Check the server status every 5 seconds
   */
  componentDidMount() {
    this.setState({ checkerId: setInterval(() => this.checkServer(), 5000) });
  }


  /**
   * Set the application's connection status.
   */
  checkServer() {
    fetch("/sql/checkConnection")
      .then((res) => {
        if (res.ok) {
          this.props.setServerStatus(true);
        } else {
          throw new Error("Couldn't connect to MYSQL");
        }
      })
      .catch((err) => {
        console.log(err);
        // clearInterval(this.state.checkerId);
        this.props.setServerStatus(false);
      });
    this.forceUpdate();
  }
  /**
   * 
   */


  render() {
    if (!this.props.isConnected) {
      store.dispatch(setHttpCode("504"));
      return (ErrorScene(this.props.currentHttpCode))
    }
    return (
      <div className="App">
        <SiteHeader />
        {SiteRoutes}
       
      </div>
    );
  }
}

/**
 * 
 * @param {*} dispatch 
 */
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setServerStatus: setServerStatus,
    setHttpCode: setHttpCode
  }, dispatch);
}
/**
 * 
 * @param {*} state 
 */
function mapStateToProps(state) {
  return {
    isConnected: state.isConnected,
    currentHttpCode: state.currentHttpCode
  };
}
export default connect(mapStateToProps, matchDispatchToProps)(App);