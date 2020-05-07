import React, { Component } from "react";



import { connect } from 'react-redux';
import rightNav from './right-nav';
import SearchBar from "./../forms/search/search-bar";

import websiteName from "./websiteName";
import GenreDropdown from "./components/genre-dropdown";
export class SiteHeader extends Component {
  render() {
    const rightNavConfig = {
      onlineUser: this.props.onlineUser,
      notificationCnt: 0
    }

    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-primary text-white" data-test="siteHeaderComponent">
        {websiteName}

        {renderMobileToggleButton}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <GenreDropdown />
          <SearchBar />
          {rightNav(rightNavConfig)}
        </div>
      </header>
    );
  }
}

// Bootstrap toogle button
const renderMobileToggleButton = (
  <button
    className="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarSupportedContent"
  >
    <span className="navbar-toggler-icon" />
  </button>
)

function mapStateToProps(state) {
  return { onlineUser: state.onlineUser }
}

export default connect(mapStateToProps)(SiteHeader);