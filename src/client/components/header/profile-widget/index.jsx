import React, { Component } from "react";
import {connect} from "react-redux";
import {clearOnlineUser} from "client/redux/actions/user";
import { isEmpty } from "client/util";
import SplitDropdown from "./dropdown/SplitDropdown";
import {roles} from "../../../../constants/user";
const uploadBook = { url: "/bookUpload/", content: "Upload Book" };
const adminPanel = { url: "/admin-dashboard/", content: "Admin Dashboard" }
/**
 * 
 */
class ProfileWidget extends Component {
    render() {
        const {onlineUser} = this.props;
        var linkJSONs = [uploadBook];
        console.log(roles.ADMIN)
        if(onlineUser.role === roles.ADMIN){
            linkJSONs.unshift(adminPanel);
        }

        if (isEmpty(onlineUser)) {
            return SignInButton;
        } else {
            return SplitDropdown(onlineUser, linkJSONs, this.props.logoutUser);
        }
    }
}

const SignInButton = (
    <button type="button" className="btn btn-secondary"
        data-toggle="modal" data-target="#signInModal">
        Sign In
  </button>
)

function mapDispatchToProps(dispatch){
    return {
        logoutUser: () =>{
            dispatch(clearOnlineUser())
        } 
    }
}


export default connect(()=>{}, mapDispatchToProps)(ProfileWidget);