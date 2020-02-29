import React, { Component } from "react";
import "./database-container.css";
/**Redux*/
import {connect} from "react-redux";

/**Components*/
import FormContainer from "./components/forms/form-container";
import DatabaseNav from "./components/nav";
import DatabaseScene from "./scenes/DatabaseScene";

/**
 * 
 * @prop {Number} activeContainerIndex
 */
class DatabaseContainer extends Component {
  render() {
    const {activeContainerIndex, onlineUser} = this.props;

    return (
      <div className="book-creator container">
        <DatabaseNav/>
        {rightContainer(activeContainerIndex, onlineUser)}
      </div>
    )
  }
}
/**
 * 
 * @param {Number} index 
 */
function rightContainer(index, onlineUserJSON){
  if(index < 3){
    return (<DatabaseScene index={index}/>)
  }

  return <FormContainer index = {index-3} onlineUser = {onlineUserJSON}/>
}

function mapStateToProps(state){
  return {
    activeContainerIndex: state.activeDataContainer,
    onlineUser: state.onlineUser
  }
}

export default connect(mapStateToProps)(DatabaseContainer);