import React, { Component } from "react";
import HomeSection from "./../components/sections/HomeSection";
import BookRow from "./../components/sections/BookRow";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import ErrorScene from "./errors/ErrorScene";
import ErrRedirect from "./../services/error-redirect";
import store from "./../redux/stores/index";
import {setHttpCode} from "./../redux/actions/index";

/**
 * Contains the application's home page.
 */

 /**
  * TODO:
  * Signed in users will have a favorites
  * and perhaps a continue reading row
  * 
  * The continue reading row will have progress
  * percentages
  */
class HomeScene extends Component {
  render() {
  
     
    return (
      <div>
        {HomeSection}
        
        <BookRow rowName={"Romance"} />
        <BookRow rowName={"Action"} />
      </div>
    );
  }
}
function mapStateToProps(state){
  return {isConnected: state.isConnected}
}
export default connect(mapStateToProps)(HomeScene);