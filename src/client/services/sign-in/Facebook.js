import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import store from "./../../redux/stores/index";
import { setOnlineUser } from "./../../redux/actions/index";
import { connect } from "react-redux";
import { appId } from "./../../config/facebook-sigin";
class Facebook extends Component {
  state = { result: null }
  isUserRegistered(userJSON) {
    if(!userJSON.isLoggedIn){
      return;
    }
    fetch("facebookUser/doesExist/" + userJSON.fbID)
      .then(data => data.json())
      .then((result) => {
       
        if (result.doesExist) {
          return;
        }
      
        fetch("/createData/FacebookUser", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "facebookUserId": userJSON.fbID,
            "name": userJSON.name,
            "email": userJSON.email
          })
        });


      })

  }
  responseFacebook = response => {
    //if statement for undefined status?
    console.log(response);
    console.log(this.props.onlineUser);

    const user = {
      isFB: true,
      isLoggedIn: !this.props.onlineUser.isLoggedIn,
      fbID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    }
    const dataUser = {
      fbID: response.userID,
      name: response.name,
      email: response.email
    }
    this.isUserRegistered(dataUser);
    store.dispatch(setOnlineUser("onlineUser", user));
  }
  componentClicked = () => console.log("clicked");
  render() {
    const app = process.env.REACT_APP_FACEBOOK_APP_ID;
    let fbContent;
    const { onlineUser } = this.props;


    var textButton = "Login with Facebook"
    if (onlineUser.isLoggedIn) {
      textButton = "Logout with Facebook"
    }
    fbContent = <FacebookLogin
      appId={app.toString()}
      autoLoad={false}
      textButton={textButton}
      fields="name,email,picture"
      onClick={this.componentClicked}
      callback={this.responseFacebook} />
    // }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { onlineUser: state.onlineUser }
}

export default connect(mapStateToProps)(Facebook);