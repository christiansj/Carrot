import React, { PureComponent } from 'react';
import "./admin-control-panel.css";

import panelButton from "./components/buttons/panel-button";
import buttonJSONs from "./data/buttonJSONs";

class AdminControlPanel extends PureComponent {
  render() {

    return (
      <div className="admin-control-panel container">

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