import React, { Component } from 'react';
import panelWidget from "./components/widgets/panel-widget";
import panelButton from "./components/buttons/panel-button";
import "./admin-control-panel.css";
import buttonJSONs from "./data/buttonJSONs";
class AdminControlPanel extends Component {
  render() {
    return (
      <div className="admin-control-panel container">
        <div className="row">
          {panelWidget("btn btn-warning", "Online Users", "#")}
          {panelWidget("btn btn-success", "Weekly Earnings", "#")}

        </div>
        {buttonJSONs.map((item, index) =>
          <a href={item.url} key={"panelButton"+index}>
            {panelButton(item.icon, item.buttonText)}
          </a>

        )}
      </div>
    );
  }
}

export default AdminControlPanel;