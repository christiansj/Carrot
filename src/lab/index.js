import React, { Component } from "react";
import BookDetail from "./BookDetail";
import SignInScene from "./sign-in";
import { connect } from "react-redux";
import authorView from "./../client/scenes/author-view/index";
import SignInView from "client/scenes/login/index";

const dummyCheckboxes = [
  {text: "A", isTrue: false},
  {text: "B", isTrue: false},
  {text: "C", isTrue: true},
  {text: "A", isTrue: false},
  {text: "B", isTrue: false},
  {text: "A", isTrue: false},
  {text: "B", isTrue: false},
]

class Lab extends Component {
  render() {
    return (
      <div>
        {/* {authorView} */}
        {/* <SignInView/> */}
        <BookDetail/>
        {/* <SignInScene isLoggedIn={this.props.onlineUser.isLoggedIn} /> */}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    onlineUser: state.onlineUser
  }
}
export default connect(mapStateToProps)(Lab)