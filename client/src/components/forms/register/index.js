import React, { Component } from 'react';

import ApiService from './../../../services/Api/index'; 
import formRow from './../../../components/forms/form-row';
import registerFields from './register-fields';

export default class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestBody: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                verifyPassword: ''
            },
           errMessage: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            requestBody: {
                ...prevState.requestBody,
                [name]: value
            }
        }));
    }

   

    handleRegister(){
        
        var service = new ApiService();
        service.execute("POST", "user/register", this.state.requestBody)
        .then(res=>console.log(res))
        .catch(err=>this.setState({errMessage: err.response.data}))
    }

    render() {
        return (
            <div className="jumbotron container" data-test="registerFormComponent">
           
                <h3>Create an Account</h3>
                {
                    registerFields.map((item, index)=>{
                        const {name, label} = item;
                        const formRowConfig = {
                            name,
                            label,
                            value: this.state.requestBody[name],
                            emitEvent: this.handleInputChange
                        }
                        return (<span key={`register-field-${index}`}>
                            { formRow(formRowConfig)}
                        </span> )
                       
                    })
                }
                <p style={{color: "red"}}>{this.state.errMessage}</p>
                <div>
                    <button className="btn btn-primary" onClick={this.handleRegister} data-test="registerButton">
                        Register
                    </button>
                </div>
            </div>
        )
    }
}