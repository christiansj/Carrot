import React from "react";
import Google from "./../sign-in/google-button";
import Facebook from "./../sign-in/Facebook";

const SignUpForm = () => (
  <form>
    {Google}
    <br />
    <Facebook/>
    <div className="g-signin2" data-onsuccess="onSignIn" />
  </form>
);
export default SignUpForm;
