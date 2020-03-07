import React, {Component} from 'react';
import ApiService from 'client/services/Api';


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

  componentDidMount(){

  }

  handleInputChange(event) {
    const { target } = event;

    const value = target.value;
    const name = target.name;

    
    this.setState(prevState =>({
        requestBody: {
          ...prevState.requestBody,
          [name]: value
        }
    }), ()=>this.verifyInput());

  }

  verifyInput(){
    const {reason, dateUnbanned} = this.state.requestBody;
    var isValidInput = isNotEmpty(reason) && isNotEmpty(dateUnbanned)
    console.log(isValidInput)
    this.setState({
      isValidInput
    })
  }
  handleSubmit(){
    this.setState(prevState=>({
      requestBody: {
        ...prevState.requestBody,
        userId: this.props.userJSON.userId
      }
    }), ()=>{

      new ApiService().execute("POST", "user/ban", this.state.requestBody)
      .catch(err=>console.error(err.response.data))

    })
  
  }
  render() {
    var {reason, dateUnbanned} = this.state.requestBody;
    return (
      <div>
        <div className="form-group">
          <label for="reason">Reason</label>
          <br />
          <textarea name="reason" rows={7} value={reason} onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label for="bannedUntil">Banned until: </label>
          <input type="datetime-local" id="bannedUntil" name="dateUnbanned" value={dateUnbanned} onChange={this.handleInputChange}/>
        </div>

        <br />
        <button type="submit" className="btn btn-danger" onClick={()=>this.handleSubmit()} disabled={!this.state.isValidInput}>
          Ban User
        </button>
      </div>
    );
  }
}

function isNotEmpty(str){
  return str.trim() !== "";
}
export default BanUserForm;