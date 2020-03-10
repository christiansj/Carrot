import React, { Component } from 'react';
import ApiService from 'client/services/Api';
import formRow from '../form-row';
import { Link, withRouter } from 'react-router-dom';
import {renderFields} from './functions';
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestBody: {}
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.objectToFields = this.objectToFields.bind(this);
    }


    componentDidMount() {
        if (this.props.match === undefined) {
            return;
        }
        const { tableName, id } = this.props.match.params;

        new ApiService().execute("GET", `${tableName}/edit-form/${id}`)
            .then(res => {

                this.setState({ requestBody: res.data })
            })
            .catch(err => { alert(err) })
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
        const { tableName, id } = this.props.match.params;

        new ApiService().execute("PUT", `${tableName}/${id}`, this.state.requestBody)
            .then(res => {
                console.log(res.data)
                this.props.history.goBack()
            })
            .catch(err=>{
                console.log(err.response.data)
            })
    }


    render() {
        if (this.state.requestBody === null) {
            return (
                <div className="row">
                    <h3>Unable to find object</h3>
                </div>
            )
        }
        const { tableName } = this.props.match.params;
        const {requestBody} = this.state;
        const renderFieldsProps = {
            requestBody,
            handleInputChange: this.handleInputChange
        }
        return (
            <div className="jumbotron container" style={{textAlign: 'left'}}>

                <h1>Update {tableName}</h1>
                <hr/>
                <div id="form-container">
                    {renderFields(renderFieldsProps)}
                </div>

                <button className="btn btn-primary" onClick={() => this.handleUpdate()}>
                    Update
                </button>
                <button className="btn btn-danger" onClick={() => this.props.history.goBack()}>
                    Go Back
                </button>
            </div>
        )
    }
}


export default EditForm;