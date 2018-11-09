import React, { Component } from 'react';
import "./author-dashboard.css";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import dashboard from "./dashboard";
import ProfileView from "./profile";
import BooksView from "./books";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SettingsView from "./settings";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBook, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
const navLinks = [
  { url: "/dashboard/profile/", text: "Profile", icon: <FontAwesomeIcon icon={faUser} /> },
  { url: "/dashboard/books/", text: "Books", icon: <FontAwesomeIcon icon={faBook} /> },
{ url: "/dashboard/analytics/", text: "Analytics", icon: <FontAwesomeIcon icon={faChartLine} />} ,
  { url: "/dashboard/settings/", text: "Settings", icon: <FontAwesomeIcon icon={faCog} />}
]
class AuthorDashboard extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="author-dashboard container">
          {dashboard(this.props.userJSON, navLinks)}
          <section className="author-dashboard content">
            <Switch>
              <Route exact path="/dashboard/profile/" exact strict render={() => ProfileView(this.props.userJSON)} />
              <Route exact path="/dashboard/books/" exact strict render={() => BooksView()} />
              <Route exact path="/dashboard/settings/" exact strict render={() => SettingsView()} />

            </Switch>
          </section>
        </div>
      </BrowserRouter>

    );
  }
}

export default AuthorDashboard;
