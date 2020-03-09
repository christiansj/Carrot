import React, { Component } from "react";



import { connect } from 'react-redux';
import rightNav from './right-nav';
import SearchBar from "client/components/forms/search/search-bar";

import websiteName from "./websiteName";


class SiteHeader extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
        {websiteName}
        {renderMobileToggleButton}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <SearchBar />
          {rightNav(this.props.onlineUserJSON)}
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
  return { onlineUserJSON: state.onlineUser }
}

export default connect(mapStateToProps)(SiteHeader);