import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import HomeScene from "./../scenes/HomeScene";
import DatabaseScene from "./../scenes/DatabaseScene";
import BookDetail from "./../scenes/book-detail/BookDetail";
import Lab from "./../../lab/index";
import SignIn from "./../../lab/sign-in";
import BookCreator from "./../scenes/book-create/";
import UserDetail from "./../scenes/user-detail/index";
import ContactRoute from "./../scenes/contact-us/index";
import ErrorScene from "./../scenes/errors/ErrorScene";
import AuthorDashboard from "./../scenes/author-dashboard/index";
const routes = (userJSON) => (
  <BrowserRouter>

    <div>
      <Route exact path="/" render={() => (
        !userJSON.isLoggedIn ? (<SignIn />) : (<Redirect to="/dashboard/profile/" />)
      )} />
      <Route path="/dashboard/"  render={() => 
        (!userJSON.isLoggedIn ? (<Redirect to="/" />) : (<AuthorDashboard userJSON={userJSON}/>))} />
      <Route exact path="/error/" component={ErrorScene} />


      <Route exact path="/database/" component={DatabaseScene} />
      <Route exact path="/u/" component={BookDetail} />
      <Route exact path="/lab/" component={Lab} />
      <Route exact path="/e/" component={BookCreator} />
      <Route exact path="/user/" component={UserDetail} />
      
      {ContactRoute}

    </div>
  </BrowserRouter>
);
export default routes;
