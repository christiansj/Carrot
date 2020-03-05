import React, { Component } from 'react';
import UserTable from "client/components/tables/UserTable";
import SelectInput from "client/components/forms/select/select-input";
import ApiService from 'client/services/Api';
import { Link } from 'react-router-dom';

class UserlistScene extends Component {
    state = { roleNames: [], prevIndex: 0, index: 0, users: [] }
    constructor(props){
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
                this.setState({ roleNames }, ()=>this.fetchUsers());
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }

    handleSelectChange(event) {

        const { roleNames, index, prevIndex } = this.state;
        const value = event.target.value;
        
        const selectedIndex = roleNames.findIndex(item => item == value);
        console.log(selectedIndex)
        // if (selectedIndex === prevIndex) {
        //     return;
        // }

        this.setState({ index: selectedIndex },()=>this.fetchUsers())
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
            })
    }

    render() {
        const {roleNames, users} = this.state;
        return (
            <div className="jumbotron container">
                <br />
                <Link to="/" style={{float: "left"}} onClick={()=>this.props.history.goBack()}>Back</Link>
                <h1>User List</h1>
                {SelectInput("table", roleNames, this.handleSelectChange)}
                <br /><hr /><br />

                {UserTable(users, "table-hover")}
            </div>
        )
    }
}

export default UserlistScene;