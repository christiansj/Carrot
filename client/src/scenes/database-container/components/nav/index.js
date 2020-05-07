import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import ApiService from './../../../../services/Api';
import iconMap from './icon-map';

class DatabaseNav extends Component {
    state = {
        tableNames: []
    }
    componentDidMount() {

        new ApiService().execute('GET', '/admin/tableNames')
            .then(res => {
                this.setState({ tableNames: res.data }, () => {
                    const { history } = this.props;
                    const {tableName} = this.props.match.params;
                    if(!tableName){
                        history.push(`/admin-dashboard/database/${this.state.tableNames[0]}`)
                    }
                    this.render();
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { tableNames } = this.state;
        return (
            <ul id="create-nav">
                <h2 style={{ fontWeight: "bold", color: "grey", textAlign: "center", fontFamily: "'Secular One', sans-serif" }}>
                    Database
                </h2>
                {tableNames.map((name, index) => {
                    return renderLink(name, index, "All", `/admin-dashboard/database/${name}`);
                })}
                <hr />
                {tableNames.map((name, index) => {
                    if(name === "book"){
                        return null;
                    }
                    return renderLink(name, index, "Create", `/admin-dashboard/database/create/${name}`);
                })}
            </ul>
        )
    }
}

const renderLink = (name, index, linkType, linkUrl) => (
    <li >
        <NavLink
            to={linkUrl}
            activeStyle={{ color: "black" }}
            key={`nav-link-${name}-${linkType}-${index}`}
            
        >
            {iconMap[name]} {`${linkType} ${name}`}
        </NavLink>

    </li>
);

export default withRouter(DatabaseNav);