import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import AdminControlPanel from "client/scenes/admin-control-panel/index";
import BookDetail from "client/scenes/book-detail/index";

import GenreBookView from "client/scenes/book-genres/";

import HomeScene from "client/scenes/home/index";

import DatabaseContainer from "../scenes/database-container";
import ChapterViewScene from "client/scenes/chapter/view/index";
import UserDetail from "../scenes/user-detail";
import ContactRoute from "../scenes/contact-us";
import ErrorScene from "../scenes/errors/ErrorScene";
import BookUploadScene from "../scenes/book-upload/";
import controlPanelRoutes from "client/scenes/admin-control-panel/routes/routes";
import ChapterUploadScene from "client/scenes/chapter/upload/index";
import RegisterForm from "client/components/forms/register";
import EditForm from "client/components/forms/edit-form/";
import CreateForm from "client/components/forms/create-form";
import ViewRecord from "client/components/view-record";
import SiteHeader from "client/components/header/SiteHeader.jsx";

const routes = (userJSON) => (
  <BrowserRouter>

    <div>
      <Route path="/" component={SiteHeader} />
      <Route exact path="/" component={HomeScene} />
      <Route exact path="/register/" component={RegisterForm} />
      <Route exact path="/home/" component={HomeScene} />

      <Route exact path="/error/" component={ErrorScene} />

      <Route path="/book/" component={BookDetail} />
      <Route exact path="/books/:genreName" component={GenreBookView} />

      <Route path="/content/:bookString/:chapterString/" component={ChapterViewScene} />
      <Route path="/:bookId-:bookTitle/chapterUpload/" component={ChapterUploadScene} />

      <Switch>
        <Route exact path="/admin-dashboard/" component={AdminControlPanel} />
        <Route path="/admin-dashboard/database/" component={DatabaseContainer} />
        <Route exact path="/admin-dashboard/edit/:tableName/:id" component={EditForm} />
        <Route exact path="/admin-dashboard/create/:tableName" component={CreateForm} />
        <Route exact path="/admin-dashboard/view/:tableName/:id" component={ViewRecord} />
      </Switch>

      <Route path="/user/:username" component={UserDetail} />

      <Route exact path="/bookUpload/" render={() => (<BookUploadScene authorJSON={userJSON} />)} />

      {ContactRoute}
      {controlPanelRoutes}
    </div>
  </BrowserRouter>
);
export default routes;
