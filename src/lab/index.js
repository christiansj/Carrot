import React, { Component } from "react";
import BookDetail from "./BookDetail";
import SignInScene from "./sign-in";
import { connect } from "react-redux";

class Lab extends Component {
  render() {
    return (
      <div>

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