import React from 'react';
import {Route} from 'react-router-dom';
import UserlistScene from "./../scenes/user/";
const controlPanelRoutes = (
  <div>
    <Route exact path="/userlist/" component={UserlistScene}/>
  </div>
);
export default controlPanelRoutes;