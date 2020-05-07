import React, { Component } from "react";
import "./database-container.css";
import {connect} from 'react-redux';
/**Components*/
import DatabaseNav from "./components/nav";
import DatabaseScene from "./scenes/DatabaseScene";
import { Switch, Route } from "react-router-dom";
import CreateForm from "./../../components/forms/create-form";

import { roles } from './../../constants/user/';
import ErrorScene from "./../../scenes/errors/ErrorScene";
import { isEmpty } from "./../../util";
/**
 * 
 * @prop {Number} activeContainerIndex
 */
class DatabaseContainer extends Component {
  render() {
    const {onlineUser} = this.props;
    if (isEmpty(onlineUser) ||onlineUser.role < roles.ADMIN) {
      return ErrorScene("403");
    }
    return (
      <div className="book-creator container">
        <DatabaseNav />
        <Switch>
          <Route exact path="/admin-dashboard/database/create/:tableName" component={CreateForm}/>
          <Route exact path="/admin-dashboard/database/:tableName" component={DatabaseScene} />
          
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    onlineUser: state.onlineUser
  }
}
export default connect(mapStateToProps)(DatabaseContainer);