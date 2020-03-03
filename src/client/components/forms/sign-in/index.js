import React, { Component } from 'react'

import ApiService from 'client/services/Api';
import Input from 'client/components/forms/text/text-input'
class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        const {identity, password} = this.state;

        new ApiService().execute('POST', 'user/login', {identity, password})
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h4>Sign In</h4>
                {Input("identity", "Email or Username", "text", this.state.identity, this.handleInputChange, null)}
                {Input("password", "password", "password", this.state.password, this.handleInputChange, null)}

                <button type="button" onClick={() => this.handleSubmit()} id="register-button">
                    Login
                </button>
            </div>
        )
    }
}


export default SignInForm;