import React, {Component} from "react";

import CheckboxRow from "./../../services/forms/checkbox-row";
import {createForms} from "./create-form-objects";
import {tableNames} from "./navLinkJSONs";
/**
 * A form element containing
 * the header and forms array properties
 * within {createJSON}
 * 
 * @prop {Integer} index  
 */
class FormContainer extends Component{
  state = {genres: []}
  componentDidMount(){
    fetch("getAll/Genre/")
    .then(data => data.json())
    .then((genres) => { this.setState({ genres}) })
    .catch((err) => {
      console.log(err);
    });
    this.forceUpdate();
  }
  /**
   * 
   */
  render(){
    const {index} = this.props;
    const createJSON = createForms[index];
    const tableName = tableNames[index];
    return(
      <form id="form-container" action={"/createData/"+tableName} method="post">
        <h1>{createJSON.header}</h1>
        {createJSON.forms.map(form => {
          return form;
        })
        }
        {this.renderGenreCheckboxes()}
        <button type="submit"className="btn btn-primary" 
        onClick={()=>{this.handleSubmitButton(index)}}>
          Submit
        </button>
      </form>
    )
  }
  /**
   * 
   */
  renderGenreCheckboxes(){
    if(this.props.index == 1 && this.state.genres.length >= 1){
      var genreNames = [];
      for(var i = 0; i < this.state.genres.length; i++){
        genreNames.push(this.state.genres[i].name)
      }
      return CheckboxRow("genre", genreNames);
    }
  }
  handleSubmitButton(){
    fetch("/createData/"+this.props.index);
  }
}


export default (FormContainer);