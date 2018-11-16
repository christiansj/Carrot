import React, {Component} from "react";

import CheckboxRow from "./../../services/forms/checkbox-row";
import {createForms} from "./create-form-objects";
import {tableNames} from "./navLinkJSONs";
import checkBoxScroll from "client/services/forms/checkboxScroll";

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
   * TODO: put the checkboxes in a scroll pane instead of laying
   * them out in a row
   */
  renderGenreCheckboxes(){
    if(this.props.index == 1 && this.state.genres.length > 0){
      var genreNames = [];
     
      for(var i = 0; i < this.state.genres.length; i++){
        genreNames.push(this.state.genres[i].name)
      }
      return checkBoxScroll("genre", genreNames);
    }
  }
  handleSubmitButton(){
    fetch("/createData/"+this.props.index);
  }
}


export default (FormContainer);