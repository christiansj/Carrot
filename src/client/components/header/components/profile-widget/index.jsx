import React, { Component } from "react";
import { connect } from "react-redux";
import { clearOnlineUser } from "client/redux/actions/user";
import ProfileDropdown from "./dropdown/ProfileDropdown";
import { roles } from "../../../../../constants/user";
import { isEmpty } from "client/util";


const uploadBook = { url: "/bookUpload/", content: "Upload Book" };
const adminPanel = { url: "/admin-dashboard/", content: "Admin Dashboard" }



export class ProfileWidget extends Component {
    render() {
        const { onlineUser } = this.props;
        var links = [uploadBook];
        
        if (isEmpty(onlineUser)) {
            return null;
        } else if (onlineUser.role === roles.ADMIN) {
            links.unshift(adminPanel);
        }
        
        const splitDropdownConfig = {
            onlineUser,
            links,
            logoutUser: this.props.logoutUser
        }
        return (
            <div data-test="profileWidgetComponent">
                {ProfileDropdown(splitDropdownConfig)}
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return {
        logoutUser: () => {
            dispatch(clearOnlineUser())
        }
    }
}


export default connect(() => { }, mapDispatchToProps)(ProfileWidget);