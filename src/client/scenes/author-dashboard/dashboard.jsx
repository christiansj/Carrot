import React from 'react';
import dashboardNav from "./dashboard-nav";

const dashboard = (userJSON, navLinks) => (
  <article className="author-dashboard dashboard">
    {dashboardNav(navLinks)}
  </article>
)

export default dashboard;