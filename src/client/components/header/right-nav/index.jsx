import React from 'react';
import ProfileWidget from "./profile-widget";
import notificationBell from "./notificationBell";

import { isEmpty } from "client/util";

const SignInButton = (
    <button type="button" className="btn btn-secondary"
      data-toggle="modal" data-target="#signInModal">
      Sign In
    </button>
  )
  
  
  const rightNav = (onlineUserJSON) => {
    console.log(onlineUserJSON)
    if (isEmpty(onlineUserJSON)) {
      return (
        <ul className="navbar-nav mr-auto" style={{ float: 'right' }}>
          <li className="nav-item"> {SignInButton}</li>
         <li className="nav-item">
          <a href="/register" style={{ color: "white" }}>Register</a>
         </li>
        </ul>
      )
    }
  
    return (
      <ul className="nav navbar-nav ml-auto" style={{ float: 'right !important' }}>
        <li className="nav-item"><ProfileWidget onlineUser={onlineUserJSON} /></li>
        <li className="nav-item">{notificationBell(12)}</li>
      </ul>
    );
  }

  export default rightNav;