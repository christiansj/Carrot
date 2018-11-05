import React from "react";
import GoogleLogin from "react-google-login";
import GoogleCreds from "./../../../google-creds";
const responseGoogle = (response) => {
  console.log(response);
}
const Google = (
  <GoogleLogin
    clientId = {GoogleCreds.web.client_id}
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    
  />
)

export default Google;