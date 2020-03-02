import React, { Component } from 'react'
import ApiService from 'client/services/Api';

import {toggleExistsError, areRequirementsFilled, renderFields, areNoErrors} from './functions/exports';
import { Link } from 'react-router-dom';
import "./../forms.css";

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestBody: {},
            uniqueFields: [],
            requiredFields: [],
            isValidInput: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.uniqueCheck = this.uniqueCheck.bind(this);
    }

    componentDidMount() {
        if (this.props.match === undefined) {
            return;
        }
        const { tableName } = this.props.match.params;

        new ApiService().execute("GET", `${tableName}/create-form`)
            .then(res => {
                const {  uniqueFields, requiredFields } = res.data;
                const requestBody = res.data.obj;
               
                const isValidInput = areRequirementsFilled({requestBody, requiredFields});
                this.setState({ requestBody, uniqueFields, requiredFields, isValidInput }, ()=>{})
            })
            .catch(err => { console.log(err) })
    }




    uniqueCheck(event) {
        const { target } = event;
        const value = target.value;
        const name = target.name;

        const { uniqueFields, requiredFields, requestBody } = this.state;
        const { tableName } = this.props.match.params;

        if (uniqueFields.find(item => item === name) !== undefined) {
            new ApiService().execute("get", `${tableName}/unique/${name}/${value}`)
                .then(res => {

                    const toggleExistsProps = {
                        name,
                        statusCode: res.status
                    }


                    toggleExistsError(toggleExistsProps);
                    const isValidInput = areNoErrors() && areRequirementsFilled({requestBody, requiredFields});
                    this.setState({ isValidInput })
                })
                .catch(err => {
                    console.log(err)
                    this.setState({ isValidInput: false })
                })
        }
    }


    handleInputChange(event) {
        const { target } = event;

        const value = target.value;
        const name = target.name;
        const { uniqueFields, requiredFields, requestBody } = this.state;

        if (uniqueFields.find(item => item === name) !== undefined) {
            document.getElementById(`${name}-exists-error`).style.display = "none";
        }
                
        this.setState(prevState => ({
            requestBody: {
                ...prevState.requestBody,
                [name]: value
            },
            isValidInput: areNoErrors() && areRequirementsFilled({requestBody, requiredFields})
        }));
    }

    handleSubmit() {
        const { tableName } = this.props.match.params;

        new ApiService().execute("POST", `${tableName}/`, this.state.requestBody)
            .then(res => {
                this.props.history.goBack()
            })
    }

    render() {
        const { requestBody, uniqueFields } = this.state;
        const renderFieldsProps = {
            requestBody,
            uniqueFields,
            changeEvent: this.handleInputChange,
            blurEvent: this.uniqueCheck
        }
        return (
            <div className="container">
                <div id="form-container">
                    {renderFields(renderFieldsProps)}
                </div>

                <button className="btn btn-primary" onClick={() => this.handleSubmit()} disabled={!this.state.isValidInput}>
                    Create
                </button>
            </div>
        );
    }
}

export default CreateForm;