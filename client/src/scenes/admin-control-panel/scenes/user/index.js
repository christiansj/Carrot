import React, { Component } from 'react';
import UserTable from "./../../../../components/tables/UserTable";
import SelectInput from "./../../../../components/forms/select/select-input";
import ApiService from './../../../../services/Api';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { roles } from './../../../../constants/user';
import ErrorScene from "./../../../../scenes/errors/ErrorScene";
import { isEmpty } from "./../../../../util";

class UserlistScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            roleNames: [],
            prevIndex: 0,
            index: 0,
            users: []
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
        new ApiService().execute("GET", "user/rolenames")
            .then(res => {
                var roleNames = res.data;
                roleNames.unshift("All");
                this.setState({ roleNames }, () => this.fetchUsers());
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    handleSelectChange(event) {
        const { roleNames } = this.state;
        const value = event.target.value;

        const selectedIndex = roleNames.findIndex(item => item === value);
    
        this.setState({ index: selectedIndex }, () => this.fetchUsers())
    }

    fetchUsers() {
        const { index } = this.state;
        if (index < 0) {
            console.err(`UserlistScene: index (${index}) is less than 0`);
            return;
        }
        new ApiService().execute("GET", `user/role/${index}`)
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => {
                console.err(err.response.data);
            });
    }

    render() {
        const { roleNames, users } = this.state;
        const {onlineUser} = this.props;
        if (isEmpty(onlineUser) ||onlineUser.role < roles.ADMIN) {
            return ErrorScene("403");
          }
        return (
            <div className="jumbotron container">
                <br />
                <Link to="/" style={{ float: "left" }} onClick={() => this.props.history.goBack()}>Back</Link>
                <h1>User List</h1>
                {SelectInput("table", roleNames, this.handleSelectChange)}
                <br /><hr /><br />

                {UserTable(users, "table-hover")}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        onlineUser: state.onlineUser
    }
}
export default connect(mapStateToProps)(UserlistScene);