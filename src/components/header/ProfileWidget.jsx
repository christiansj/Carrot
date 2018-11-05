import React from "react";

import SplitDropdown from "./../bootstrap/SplitDropdown";
const profileLinkJSONs = [
  { url: "/logout/", content: "Analytics" }
];
/**
 * 
 */
export default function ProfileWidget(activeUser) {
  if (activeUser.isLoggedIn) {
    return SplitDropdown(activeUser, "btn-primary", profileLinkJSONs);
  }
  return;
}

const SignInButton = (
  <button type="button" className="btn btn-secondary" 
  data-toggle="modal" data-target="#signInModal">
    Sign In
  </button>
)