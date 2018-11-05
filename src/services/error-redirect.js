import React, {Component} from "react";
import store from "./../redux/stores/index";
import {setHttpCode} from "./../redux/actions/index";
import {Redirect} from "react-router-dom";
export default class ErrRedirect extends Component{
  render(){
    store.dispatch(setHttpCode(this.props.httpCode))
    return (
      <Redirect to="/error/"/>

    )
  }
}

