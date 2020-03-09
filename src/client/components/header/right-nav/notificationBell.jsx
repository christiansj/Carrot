import React from "react";

import { faBell as sBell } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const notificationBell = (notificationCnt) => (
  <button className="btn btn-primary">
    {renderBellIcon(notificationCnt)}
    {renderBadge(notificationCnt)}
  </button>
)


function renderBellIcon(notificationCnt) {
  var bell = faBell;
  if (notificationCnt > 0) {
    bell = sBell;
  }
  return ( <FontAwesomeIcon icon={bell} 
  size="2x" style={{ color: "white" }} />)
}


function renderBadge(notificationCnt) {
  if (notificationCnt > 0) {
    return <span class="badge badge-danger">{notificationCnt}</span>
  }
}
export default notificationBell;