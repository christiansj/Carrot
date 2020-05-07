import React, { Component } from 'react';
import ApiService from './../../../services/Api';
import Form from './components/form';

import './edit-form.css';
class EditForm extends Component {
    state = {
        requestBody: {}
    }

    componentDidMount() {
        if (this.props.match === undefined) {
            return;
        }
        const { tableName, id } = this.props.match.params;
        new ApiService().execute("GET", `${tableName}/edit-form/${id}`)
            .then(res => {

                this.setState({ requestBody: res.data })
            });
    }


    render() {
        const { requestBody } = this.state;
        const { tableName, id } = this.props.match.params;

        const formConfig = {
            requestBody,
            tableName,
            id
        }
        return <Form {...formConfig} />
    }
}


export default EditForm;