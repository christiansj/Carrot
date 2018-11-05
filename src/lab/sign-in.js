import React, { Component } from 'react';
import {TextInput} from "./../services/forms/exports";
import Facebook from "./../services/sign-in/Facebook";
class SignInScene extends Component {
  state = {  }
  render() { 
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