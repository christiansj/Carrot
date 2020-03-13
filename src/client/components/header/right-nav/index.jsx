import React from 'react';
import ProfileWidget from "./../components/profile-widget";
import notificationBell from "../components/notification-bell/notificationBell";

import { isEmpty } from "client/util";

const SignInButton = (
  <button type="button" className="btn btn-secondary"
    data-toggle="modal" data-target="#signInModal" data-test="signInButton">
    Sign In
    </button>
)


const rightNav = (props = {}) => {
  const { onlineUser, notificationCnt } = props;

  if (isEmpty(onlineUser)) {
    return (
      <ul className="navbar-nav ml-auto" data-test="navWithoutUser">
        <li className="nav-item"> {SignInButton}</li>
        <li className="nav-item">
          <a href="/register" style={{ color: "white" }} data-test="registerLink">
            Register
          </a>
        </li>
      </ul>
    )
  }

  return (
    <ul className="nav navbar-nav ml-auto" data-test="navWithUser">
      <li className="nav-item" >
        <ProfileWidget onlineUser={onlineUser} data-test="profileWidget" />
      </li>
      <li className="nav-item" data-test="notificationBell">
        {notificationBell({notificationCnt})}
      </li>
    </ul>
  );
}

export default rightNav;