import React, { Component } from 'react';
import {TextInput} from "./../client/services/forms/exports";
import {Redirect} from "react-router-dom";
import Facebook from "./../client/services/sign-in/Facebook";
class SignInScene extends Component {
  state = {  }
  render() { 
    // if(this.props.isLoggedIn){
    //   return(
    //     <Redirect to={"/"}/>
    //   )
    // }
    return ( 
      <form className="sign-in container bg-light" >
        {TextInput("username", "text", "")}
        {TextInput("password", "password", "")}
        <button type="button" className="btn btn-warning">Sign In</button>
        <br/>
        
        <hr/>
        <Facebook/>

      </form>
     );
  }
}
 
export default SignInScene;