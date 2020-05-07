import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ApiService from './../../../services/Api';

class BanUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidInput: false,
      requestBody: {
        userId: null,
        reason: '',
        dateUnbanned: ''
      }

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
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
    }), () => this.verifyInput());
  }

  verifyInput() {
    const { reason, dateUnbanned } = this.state.requestBody;
    var isValidInput = isNotEmpty(reason) && isNotEmpty(dateUnbanned)
    this.setState({
      isValidInput
    })
  }

  handleSubmit() {
    const { userId } = this.props.user;
    this.setState(prevState => ({
      requestBody: {
        ...prevState.requestBody,
        userId: parseInt(userId, 10)
      }
    }), () => {
      new ApiService().execute("POST", "user/ban", this.state.requestBody)
        .catch(err => console.error(err.response.data))

    })
  }

  render() {
    var { reason, dateUnbanned } = this.state.requestBody;
    const { userId } = this.props.user;
    if (!userId) {
      return <h3>User not found</h3>;
    }
    return (
      <div data-test="banUserFormComponent">
        <div className="form-group" data-test="reasonInputGroup">
          <label htmlFor="reason">Reason</label>
          <br />
          <textarea name="reason" rows={7} value={reason} onChange={this.handleInputChange} />
        </div>
        <div className="form-group" data-test="bannedUntilInputGroup">
          <label htmlFor="bannedUntil">Banned until</label>
          <input type="datetime-local" id="bannedUntil" name="dateUnbanned" value={dateUnbanned} onChange={this.handleInputChange} />
        </div>

        <br />
        <button type="submit" className="btn btn-danger" onClick={() => this.handleSubmit()} disabled={!this.state.isValidInput}>
          Ban User
        </button>
      </div>
    );
  }
}

function isNotEmpty(str) {
  return str.trim() !== "";
}

BanUserForm.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.number.isRequired
  })
}
export default BanUserForm;