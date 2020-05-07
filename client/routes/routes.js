import React from "react";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import AdminControlPanel from "./node_modules/client/scenes/admin-control-panel";
import BookDetail from "./node_modules/client/scenes/book-detail";

import GenreBookView from "./node_modules/client/scenes/book-genres/";

import HomeScene from "./node_modules/client/scenes/home";

import DatabaseContainer from "../src/scenes/database-container";
import ChapterViewScene from "./node_modules/client/scenes/chapter/view";
import UserDetail from "../src/scenes/user-detail";
import ContactRoute from "../src/scenes/contact-us";
import ErrorScene from "../src/scenes/errors/ErrorScene";
import BookUploadScene from "../src/scenes/book-upload";
import controlPanelRoutes from "./node_modules/client/scenes/admin-control-panel/routes/routes";
import ChapterUploadScene from "./node_modules/client/scenes/chapter/upload";
import RegisterForm from "./node_modules/client/components/forms/register";
import EditForm from "./node_modules/client/components/forms/edit-form/";
import CreateForm from "./node_modules/client/components/forms/create-form";
import ViewRecord from "./node_modules/client/components/view-record";
import SiteHeader from "./node_modules/client/components/header/SiteHeader.jsx.js";

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
