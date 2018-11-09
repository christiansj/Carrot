import React from 'react';
import {NavLink} from "react-router-dom";

const renderNavLinks = (linkJSONs) => (
  <ul>
    <h2 style={{fontWeight: "bold", color: "black", fontFamily: "'Secular One', sans-serif"}}>
    Dashboard
    </h2>
    {linkJSONs.map((linkJSON, index) => {
      return (renderNavLink(linkJSON, index));
    })}
    <hr/>
    <button className="btn btn-danger">Log Out</button>
  </ul>
)
const renderNavLink = (linkJSON, index) => (
  <li>
    <NavLink key={"authorNavLink" + index} to={linkJSON.url}
      activeStyle={{ color: "orange" }} className="dashboard-nav-link">
      {linkJSON.icon}&nbsp;{linkJSON.text}
    </NavLink>
  </li>
)

const dashboardNav = (navLinkJSONs) => (
  <nav className="author-dashboard dashNav">
    
    {renderNavLinks(navLinkJSONs)}
  </nav>
);
export default dashboardNav;