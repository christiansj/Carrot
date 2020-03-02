import React, { Component } from 'react';
import ApiService from 'client/services/Api';
import formRow from '../form-row';
import {Link, withRouter} from 'react-router-dom';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: {}
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
        .then(res=>{

            this.setState({obj: res.data})
        })
        .catch(err=>{alert(err)})
    }

    handleInputChange(event) {
        const { target } = event;
        
        const value = target.value;
        const name = target.name;
       
        this.setState(prevState => ({
            obj: {
                ...prevState.obj,
                [name]: value
            }
        }));
    }

    handleUpdate(){
        const { tableName, id } = this.props.match.params;
        
        new ApiService().execute("PUT", `${tableName}/${id}`, this.state.obj)
        .then(res=>{
            console.log(res.data)
            this.props.history.goBack()
        })
    }

    render() {
        if(this.state.obj ===null){
            return(
                <div className="row">
                    <h3>Unable to find object</h3>
                </div>
            )
        }

        return (
            <div className="container">
                <Link to="/" className='left' onClick={() => this.props.history.goBack()}>Back</Link>
                <div id="form-container">
                    {objectToFields(this.state.obj, this.handleInputChange)}
                </div>
                
                <button className="btn btn-primary" onClick={()=>this.handleUpdate()}>
                    Update
                </button>
            </div>
        )
    }
}

function objectToFields(obj, changeEvent){
    return Object.keys(obj).map((key, index)=>{
        const name = key;
        const value = obj[key];
        return(
            <span key={`edit-form-field-${index}`}>
                {formRow(name, value, changeEvent)}
            </span> )
    })
}
export default EditForm;