import React from "react";

/**FontAwesome imports */
import { faBell as sBell } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A bell icon accompanied by a badge indicating
 * the amount of unread notifications.
 * There is an icon for no notifications and 
 * another for at least 1 notification.
 * @param {Number} notificationCnt 
 */
const notificationBell = (notificationCnt) => (
  <button className="btn btn-primary">
    {renderBellIcon(notificationCnt)}
    {renderBadge(notificationCnt)}
  </button>
)

/**
 * White filled bell with at least one notification.
 * Transparent when there are zeo.
 * @param {Number} notificationCnt 
 */
function renderBellIcon(notificationCnt) {
  var bell = faBell;
  if (notificationCnt > 0) {
    bell = sBell;
  }
  return ( <FontAwesomeIcon icon={bell} 
  size="2x" style={{ color: "white" }} />)
}
/**
 * Render a badge with the notification count when 
 * there's at least 1 notifcation
 * @param {Number} notificationCnt 
 */
function renderBadge(notificationCnt) {
  if (notificationCnt > 0) {
    return <span class="badge badge-danger">{notificationCnt}</span>
  }
}
export default notificationBell;