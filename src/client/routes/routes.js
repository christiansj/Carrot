import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeScene from "./../scenes/HomeScene";
import DatabaseScene from "./../scenes/DatabaseScene";
import BookDetail from "./../scenes/book-detail/BookDetail";
import Lab from "./../../lab/index";
import BookCreator from "./../scenes/book-create/";
import UserDetail from "./../scenes/user-detail/index";
import ContactRoute from "./../scenes/contact-us/index";
import ErrorScene from "./../scenes/errors/ErrorScene";
export default (
  <Switch>
    <Route exact path="/error/" component={ErrorScene}/>
    <Route exact path="/home" component={HomeScene} />
 
    <Route exact path="/database/" component={DatabaseScene} />
    <Route path="/u/" component={BookDetail}/>
    <Route exact path="/lab/" component={Lab}/>
    <Route exact path="/e/" component={BookCreator}/>
    <Route exact path="/user/" component={UserDetail}/>
  
    {ContactRoute}
  
  </Switch>
);
