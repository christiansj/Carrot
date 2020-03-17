import React, { Component } from "react";

import Modal from "client/components/modals";
import BanUserForm from "client/components/forms/ban-user/";
import { connect } from "react-redux";

import banButton from "./banButton";
import FollowButton from 'client/components/buttons/follow/follow-button';
import bookList from './bookList';
import { isEmpty } from './../../util/';
import { roles } from './../../../constants/user';
import { setActiveRecord } from 'client/redux/actions';

import JohnGreen from "./../../../images/profile-pics/default.jpg";
import UserPicture from "../../services/pictures/UserPicture";

import "./user-detail.css";

import axios from 'axios';


export class UserDetail extends Component {
  state = { bookJSONs: [], userJSON: {} }

  componentDidMount() {
    const { username } = this.props.match.params;
    axios.all([getUser(username), getBooks(username)])
      .then(axios.spread((user, books) => {
        var bookJSONs = books.data;
        if (!bookJSONs || !bookJSONs.length) {
          bookJSONs = []
        }
        this.setState({ userJSON: user.data, bookJSONs })
      }))
      .catch(err => console.log(err));
  }

  render() {

    const { onlineUser } = this.props;
    const { bookJSONs, userJSON } = this.state;
    const { username } = this.props.match.params;
    const userId = parseInt(onlineUser.userId, 10);

    if (isEmpty(userJSON)) {
      console.log(`${username} not found`)
      return (
        <h2>User not found</h2>
      )
    }
    const banButtonConfig = {
      onlineUser,
      user: userJSON,
      handleClick: this.props.setActiveUser(userJSON)
    }
    const modalConfig = {
      modalId: "banModal",
      modalTitle: `Ban ${username}`,
      modalContent: <BanUserForm user={userJSON} />

    }

    return (
      <div className="user-detail container" data-test="userDetailComponent">
        <article className="user-general row" >

          {UserPicture(JohnGreen, "JohnGreen")}
          <div style={{ textAlign: "left" }}>
            <h2>{username} {renderBanButton(banButtonConfig)}</h2>
            <FollowButton onlineUserId={userId} otherUserId={userJSON.userId} />
            <p> {`${userJSON.firstName} ${userJSON.lastName}`}</p>
          </div>
        </article>

        {bookList(bookJSONs)}
        {Modal(modalConfig)}
      </div>
    )
  }
}

function getUser(username) {
  return axios.get(`http://localhost:8080/user/username/${username}`)
}

function getBooks(username) {
  return axios.get(`http://localhost:8080/user/books/${username}`)
}

function renderBanButton(props = {}) {
  const { onlineUser, user, handleClick } = props;
  if (isEmpty(onlineUser) || isEmpty(user)
    || onlineUser.role < roles.MODERATOR || user.role >= onlineUser.role) {
    return;
  }

  return banButton(user.role, handleClick);
}

function mapStateToProps(state) {
  return { onlineUser: state.onlineUser };
}

function mapDisptachToProps(dispatch) {
  return {
    setActiveUser: (userJSON) => {
      dispatch(setActiveRecord("activeRecord", userJSON));
    }
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(UserDetail);