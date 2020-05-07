import React, { Component } from 'react';
import "./admin-control-panel.css";

import { roles } from './../../constants/user';
import { connect } from 'react-redux';
import panelButton from "./components/buttons/panel-button";
import buttonJSONs from "./data/buttonJSONs";

import ErrorScene from "./../errors/ErrorScene";
import { isEmpty } from "./../../util";
class AdminControlPanel extends Component {
  render() {
    const {onlineUser} = this.props;
    if (isEmpty(onlineUser) ||onlineUser.role < roles.ADMIN) {
      return ErrorScene("403");
    }
    return (
      <div className="admin-control-panel container">

        {buttonJSONs.map((item, index) =>
          <a href={item.url} key={"panelButton" + index}>
            {panelButton(item.icon, item.buttonText)}
          </a>
        )}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    onlineUser: state.onlineUser
  }
}
export default connect(mapStateToProps)(AdminControlPanel);