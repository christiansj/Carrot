import React, { Component } from "react";
import JohnGreen from "./../../images/profile-pics/JohnGreen.png";
import UserPicture from "./../../services/pictures/UserPicture";
import "./user-detail.css";
/**
 * 
 */

 /**
  * TODO 
  * Favorite and books written row
  * Follow button
  */
class UserDetail extends Component {
  render() {
    return (
      <div className="user-detail container">
        <article className="user-general">
          {UserPicture(JohnGreen, "JohnGreen")}
          <h1>John Green</h1>
          <div className="follow-numbers">
            <span className="profile-number">Followers <bigger>18</bigger></span>
            |
            <span className="profile-number">Following <bigger>18</bigger></span>
          </div>
          Good morning, Hank! It's Tuesday!
        </article>

      </div>
    )
  }
}

export default UserDetail;