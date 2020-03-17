import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ApiService from 'client/services/Api';
import { renderFields } from './../../functions';
import { isEmpty } from 'client/util';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestBody: this.props.requestBody
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidUpdate() {
        const propBody = this.props.requestBody;
        if (propBody !== null && this.state.requestBody === null) {
            this.setState({ requestBody: propBody });
        }
    }


    handleInputChange(event) {
        const { target } = event;

        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            requestBody: {
                ...prevState.requestBody,
                [name]: value
            }
        }));
    }


    handleUpdate() {
        const { tableName, id } = this.props;

        new ApiService().execute("PUT", `${tableName}/${id}`, this.state.requestBody)
            .then(res => {
                this.props.history.goBack()
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }


    renderForm() {
        const { requestBody } = this.props;
        if (isEmpty(requestBody)) {
            return (
                <h2 data-test="errorMessage">
                    Unable to find object
                </h2>
            )
        }

        const renderFieldsProps = {
            requestBody,
            handleInputChange: this.handleInputChange
        }
        return (
            <span>
                <div id="form-container">
                    {renderFields(renderFieldsProps)}
                </div>

                <button className="btn btn-primary" onClick={() => this.handleUpdate()} data-test="updateButton">
                    Update
                </button>
            </span>
        )
    }


    render() {
        const { tableName } = this.props;

        return (
            <div className="jumbotron container edit-form" data-test="editFormComponent">

                <h1 data-test="formHeading">Update {tableName}</h1>
                <hr />
                {this.renderForm()}
                <button className="btn btn-danger" onClick={() => this.props.history.goBack()} data-test="goBackButton">
                    Go Back
                </button>
            </div>
        )
    }
}


Form.propTypes = {
    requestBody: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    tableName: PropTypes.string.isRequired
}
export default withRouter(Form);