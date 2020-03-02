import React, { Component } from "react";
import "./database-container.css";

/**Components*/
import DatabaseNav from "./components/nav";
import DatabaseScene from "./scenes/DatabaseScene";
import { Switch, Route } from "react-router-dom";
import CreateForm from "client/components/forms/create-form";
/**
 * 
 * @prop {Number} activeContainerIndex
 */
class DatabaseContainer extends Component {
  render() {
    return (
      <div className="book-creator container">
        <DatabaseNav />
        <Switch>
          <Route exact path="/admin-dashboard/database/create/:tableName" component={CreateForm}/>
          <Route exact path="/admin-dashboard/database/:tableName" component={DatabaseScene} />
          
        </Switch>
        {/* {rightContainer(activeContainerIndex, onlineUser)} */}
      </div>
    )
  }
}

export default DatabaseContainer;