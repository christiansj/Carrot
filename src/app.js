import React, { Component } from "react";
import SiteHeader from "./client/components/header/SiteHeader.jsx";
import SiteRoutes from "./client/routes/routes";
import store from "./client/redux/stores/index";
import ErrorScene from "./client/scenes/errors/ErrorScene";

import "popper.js";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setServerStatus, setHttpCode } from "./client/redux/actions/index";

import notificationContainer from "./client/components/sections/notification-section";
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
    const {onlineUser} = this.props;
    
    /**render ErrorScene if not connected */
    if (!this.props.isConnected) {
      store.dispatch(setHttpCode("504"));
      return (ErrorScene(this.props.currentHttpCode))
    }
    return (
      <div className="App">
        <SiteHeader />
        {SiteRoutes(onlineUser.isLoggedIn)}
        {notificationContainer}
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
    currentHttpCode: state.currentHttpCode,
    onlineUser: state.onlineUser
  };
}
export default connect(mapStateToProps, matchDispatchToProps)(App);