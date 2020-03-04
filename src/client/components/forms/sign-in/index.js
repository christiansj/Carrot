import React, { Component } from 'react'
import { connect } from 'react-redux';
import ApiService from 'client/services/Api';
import Input from 'client/components/forms/text/text-input';
import { setOnlineUser } from 'client/redux/actions/user';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identity: '',
            password: '',
            errorMessage: ''
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
        const { identity, password } = this.state;

        new ApiService().execute('POST', 'user/login', { identity, password })
            .then(res => {
                console.log(res.data)
                this.props.loginUser(res.data);

            })
            .then(() => {
                console.log(this.props.onlineUser);
            })
            .catch(err => {
                this.setState({ errorMessage: err.response.data });
                console.log(err.response.data);
            })
    }

    render() {
        return (
            <div>
                <h4>Sign In</h4>
                {Input("identity", "Email or Username", "text", this.state.identity, this.handleInputChange, null)}
                {Input("password", "password", "password", this.state.password, this.handleInputChange, null)}
                <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
                <button type="button" onClick={() => this.handleSubmit()} id="register-button">
                    Login
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        onlineUser: state.onlineUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: userJSON => {
            dispatch(setOnlineUser(userJSON))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);