import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import store from "./../../redux/stores/index";
import { setOnlineUser } from "./../../redux/actions/index";
import { connect } from "react-redux";
const {parseName} = require("./parseName");
class Facebook extends Component {
  isUserRegistered(userJSON) {
    if(!this.props.onlineUser.isLoggedIn == false){
      return;
    }
    //response returns true if the facebook user exists,
    //otherwise, it returns false if the account id isn't found
    fetch("facebookUser/doesExist/" + userJSON.fbID)
      .then(data => data.json())
      .then((result) => {
       
        if (result.doesExist) {
          return;
        }
        //create an account linked to Facebook
        fetch("/createData/FacebookUser", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "mediaName": "Facebook",
            "fbID": userJSON.fbID,
            "name": userJSON.name,
            "email": userJSON.email
          })
        });


      })

  }
  responseFacebook = response => {

    //if statement for undefined status?
    console.log(response);
    console.log(!this.props.onlineUser.isLoggedIn)
    const nameM = parseName(response.name);
    const user = {
      isFB: true,
      isLoggedIn: !this.props.onlineUser.isLoggedIn,
      fbID: response.userID,
      name: response.name,
      firstName: nameM[0],
      lastName: nameM[1],
      email: response.email,
      picture: response.picture.data.url
    }
    const dataUser = {
      fbID: response.userID,
      name: response.name,
      email: response.email
    }
   
    store.dispatch(setOnlineUser("onlineUser", user));
    this.isUserRegistered(dataUser);
  }
  componentClicked = () => console.log("clicked");
  render() {
    const app = process.env.REACT_APP_FACEBOOK_APP_ID;
    let fbContent;
    const { onlineUser } = this.props;


    var textButton = "Login with Facebook"
    if (onlineUser.isLoggedIn) {
      textButton = "Logout with Facebook";
      
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