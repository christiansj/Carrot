import React from 'react';

const panelWidget = (classString, content, url) => (
  <a href={url} className={"admin-control-panel panel-widget " + classString}>
    {content}
  </a>
);
export default panelWidget;