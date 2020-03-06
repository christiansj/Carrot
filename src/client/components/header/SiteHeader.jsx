import React, { Component } from "react";

import DropDown from "client/services/drop-down";
/**FontAwesome imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import ProfileWidget from "./profile-widget";
import SearchBar from "client/components/forms/search/search-bar";
import notificationBell from "./notificationBell";
import websiteName from "./websiteName";
import { isEmpty } from "./../../util";
/**
 * TODO make a footer to move contact us
 * TODO make a separate file for the unordered list
 * 
 * Profile Icon drops down to have faChartLine and settings gear
 */
class SiteHeader extends Component {

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
        {websiteName}

        <div>
          <SearchBar />
        </div>

        {renderMobileToggleButton}

        <div className="collapse navbar-collapse" id="navbarSupportedContent" />
        {rightSide(this.props.onlineUserJSON)}
      </header>
    );
  }
}
/**
 * Bootstrap toggle button
 */
const renderMobileToggleButton = (
  <button
    className="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
)

const SignInButton = (
  <button type="button" className="btn btn-secondary"
    data-toggle="modal" data-target="#signInModal">
    Sign In
  </button>
)
/**
 * 
 * @param {JSON} onlineUserJSON 
 */
const rightSide = (onlineUserJSON) => {
  console.log(onlineUserJSON)
  if (isEmpty(onlineUserJSON)) {
    return (
      <div>
        {SignInButton}
        <a href="/register" style={{color: "white"}}>Register</a>
      </div>
    )
  }

  return (
    <div>
      <ProfileWidget onlineUser={onlineUserJSON} />
      {notificationBell(12)}
    </div>
  );
}
function mapStateToProps(state) {
  return { onlineUserJSON: state.onlineUser }
}

export default connect(mapStateToProps)(SiteHeader);