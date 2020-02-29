import React, { Component } from 'react'
import ApiService from 'client/services/Api';
import { NavLink } from 'react-router-dom';
import iconMap from './icon-map';
import { setActiveCreateForm } from "../../../../redux/actions";
import store from "../../../../redux/stores";
import { withRouter } from 'react-router-dom';

class DatabaseNav extends Component {
    state = {
        tableNames: []
    }
    componentDidMount() {
        new ApiService().execute('GET', '/admin/tableNames')
            .then(res => {
                this.setState({ tableNames: res.data }, () => {
                    var { history } = this.props;
                    history.push(`/admin-dashboard/database/${this.state.tableNames[0]}`)
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
                    return renderLink(name, index, "All");
                })}
                <hr />
            </ul>
        )
    }
}

const renderLink = (name, index, linkType) => (
    <li >
        <NavLink
            to={`/admin-dashboard/database/${name}`}
            activeStyle={{ color: "black" }}
            key={`nav-link-${name}-${linkType}-${index}`}
            onClick={() => store.dispatch(setActiveCreateForm(index))}
        >
            {iconMap[name]} {`${linkType} ${name}`}
        </NavLink>

    </li>
);

export default withRouter(DatabaseNav);