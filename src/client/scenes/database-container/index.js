import React, { Component } from "react";
import "./database-container.css";
/**Redux*/
import {connect} from "react-redux";

/**Components*/
import FormContainer from "./components/forms/form-container";
import containerNav from "./components/nav/index";
import DatabaseScene from "./scenes/DatabaseScene";
import {linkJSONs} from "./data/navLinkJSONs";
//use TABLE_NAMES from data to construct these Strings in a function

/**
 * 
 * @prop {Number} activeContainerIndex
 */
class DatabaseContainer extends Component {
  render() {
    const lineBreakIndex = linkJSONs.length / 2;
    const {activeContainerIndex} = this.props
    return (
      <div className="book-creator container">
        {containerNav(linkJSONs, activeContainerIndex, lineBreakIndex)}
        {rightContainer(this.props.activeContainerIndex)}
      </div>
    )
  }
}
/**
 * 
 * @param {Number} index 
 */
function rightContainer(index){
  
  if(index < 3){
    return (<DatabaseScene index={index}/>)
  }

  return <FormContainer index = {index-3}/>
}

function mapStateToProps(state){
  return {
    activeContainerIndex: state.activeDataContainer
  }
}

export default connect(mapStateToProps)(DatabaseContainer);