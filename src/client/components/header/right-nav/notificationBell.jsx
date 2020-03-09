import React from 'react';

import { faBell as sBell } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const notificationBell = (props = {}) => (
  <button className="btn btn-primary" data-test="notificationBellComponent">
    {renderBellIcon(props)}
    {renderBadge(props)}
  </button>
)


function renderBellIcon(props = {}) {
  const { notificationCnt } = props;

  if (notificationCnt > 0) {
    return(
      <FontAwesomeIcon icon={sBell} size="2x" data-test={"filledBellIcon"} style={{ color: "white" }} />
    )
  }
  return (
    <FontAwesomeIcon icon={faBell} size="2x" data-test={"outlinedBellIcon"} style={{ color: "white" }} />
  )
}


function renderBadge(props = {}) {
  const { notificationCnt } = props;
  if (notificationCnt > 0) {
    return (
      <span className="badge badge-danger" id="notification-count" data-test="notificationBadge">
        {notificationCnt}
      </span>
    )

  }
}
export default notificationBell;