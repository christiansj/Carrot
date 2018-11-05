import React, {Component} from "react";
import {connect} from "react-redux";

/**
 * ServerStatus.js
 * 
 * Returns a span that with text indicating whether the 
 * application is connected to the server.
 * 
 */
class ServerStatus extends Component{
  state = {statusString: "OFF", textColor: "red"};
  
 
  render(){
     var statusString = null;
    
    if(!this.props.isConnected){
      return
    }
      

    return(
      <span />
    )
  }
}

/**
 * Retrieve the isConnected reducer from store
 * @param {*} state 
 */
function mapStateToProps(state){
  return {isConnected: state.isConnected};
}

export default connect(mapStateToProps)(ServerStatus);