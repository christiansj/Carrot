import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./../../services/modal.jsx";
import SignUpForm from "./../../services/forms/sign-up-form.js";

import DropDown from "./../../services/drop-down";
/**FontAwesome imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'

import ProfileWidget from "./ProfileWidget";
import notificationBell from "./notificationBell";
import websiteName from "./websiteName";

/**
 * TODO make a footer to move contact us
 * TODO make a separate file for the unordered list
 * Profile Icon drops down to have faChartLine and settings gear
 */
const dummyGenres = ["Action", "Fantasy", "Romance"];
class SiteHeader extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
        {websiteName}
        <button
          className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {renderNavLinks([databaseLink, DropDown(dummyGenres)])}
          <input type="text" placeholder="Search book, author, ..." />
        </div>
        {rightSide(this.props.onlineUserJSON)}
      </header>
    );
  }
}
/**
 * 
 */
const databaseLink = (
  <a href="/e/" className="nav-link btn btn-primary" >
    <FontAwesomeIcon icon={faDatabase} size="2x" />
    &nbsp; Database
  </a>
)
/**
 * 
 * @param {JSON} linkElements 
 */
const renderNavLinks = (linkElements) => (
  <ul className="navbar-nav mr-auto">
    {linkElements.map((linkElement, index) => {
        return <span>
          {linkElement}
        </span>
    })}
  </ul>
);
/**
 * 
 * @param {JSON} onlineUserJSON 
 */
const rightSide = (onlineUserJSON) => (
  <div>
    {ProfileWidget(onlineUserJSON)}
    {notificationBell(-12)}
    {Modal("signInModal", SignUpForm())}
  </div>
);

function mapStateToProps(state) {
  return { onlineUserJSON: state.onlineUser }
}

export default connect(mapStateToProps)(SiteHeader);