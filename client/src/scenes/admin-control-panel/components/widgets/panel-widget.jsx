import React from 'react';

const panelWidget = (classString, content, url, numericValue) => (
  <a href={url} className={"admin-control-panel panel-widget " + classString}>
    {content}
    <p className="widget-number">{numericValue}</p>
  </a>
);
export default panelWidget;