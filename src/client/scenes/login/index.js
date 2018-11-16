import React, { Component } from 'react';
import "./SignInView.css";

class SignInView extends Component {
  render() { 
    return ( 
    <div className="sign-in-view container bg-primary">
        <h1 className="sign-in heading">Carrot <hr/></h1>
        <button className="facebook-button"> Sign in with Facebook</button>
        <button className="google-button">Sign in with Google</button>
        <button className="twitter-button">Sign in with Twitter</button>

        <input className="username-text-input" type="text" placeholder="email"/>
        <input className="password-text-input" type="password" placeholder="password"/>
        <button className="sign-in-button" type="button">Login</button>
    </div> 
    );
  }
}


export default SignInView;