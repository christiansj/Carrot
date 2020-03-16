import React, { Component } from "react";

import SiteRoutes from "./client/routes/routes";
import store from "./client/redux/stores/index";
import ErrorScene from "./client/scenes/errors/ErrorScene";
import Modal from "client/components/modals";
import "popper.js";
import "jquery";
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import { bindActionCreators } from "redux";
import { setServerStatus, setHttpCode, setDataArray } from "./client/redux/actions/index";

import SignInForm from "client/components/forms/sign-in";
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
    fetch("http://localhost:8080/sql/checkConnection")
      .then((res) => {
        if (res.ok) {
          console.log("connected!");
          this.props.setServerStatus(true);
        } else {
          throw new Error("Couldn't connect to MYSQL");
        }
      })
      .catch((err) => {
        console.log(err);
        clearInterval(this.state.checkerId);
        this.props.setServerStatus(false);
      });
    this.forceUpdate();
  }


  /**
   * 
   */
  render() {
    const { onlineUser } = this.props;

    /**render ErrorScene if not connected */
    if (!this.props.isConnected) {
      return renderNotFoundScene();
    }
    const signInModalConfig = {
      modalId: "signInModal",
      modalTitle: "Sign In",
      modalContent: <SignInForm/>
    }
    return (
      <div className="App" id="AppBody">
     
        <div id="AppContent">
          {Modal(signInModalConfig)}
          {SiteRoutes(onlineUser)}
          {notificationContainer}
        </div>
      </div>
    );
  }
}
function renderNotFoundScene(){
  store.dispatch(setHttpCode("504"));
  return (ErrorScene("504"))
}
/**
 * 
 * @param {*} dispatch 
 */
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setServerStatus: setServerStatus,
    setHttpCode: setHttpCode,
    setDataArray: setDataArray
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