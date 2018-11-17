import React from 'react';

const panelButton = (buttonIcon, buttonText) => (
  <button className="admin-control-panel panel-button">
    <p>{buttonIcon}</p>
    <h4>{buttonText}</h4>
  </button>
);
export default panelButton;