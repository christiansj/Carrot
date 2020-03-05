import React, { Component } from 'react';
import checkBoxScroll from "./checkboxScroll";
import ApiService from "client/services/Api";
class GenreCheckboxScroll extends Component {
  state = { genres: [] }
  componentDidMount() {
    new ApiService().execute("GET", "genre/")
      .then((res) => { this.setState({ genres: res.data }) })

      .catch((err) => {
        console.log(err);
      });
    this.forceUpdate();
  }
  renderCheckboxes() {
    const { genres } = this.state;
    
    if (genres.length > 0) {
      return checkBoxScroll("genre", genres, this.props.handleCheckbox)
    }else{
      return <div/>
    }
    // if (this.state.genres.length > 0) {
    //   var genreNames = [];

    //   for (var i = 0; i < this.state.genres.length; i++) {

    //     genreNames.push({ isChecked: false, text: this.state.genres[i].name })
    //   }
    //   return checkBoxScroll("genre", genreNames);
    // } else return <div />
  }
  render() {
    return (
     <div id="genre-checkbox-scroll">
      {  this.renderCheckboxes()}
     </div>
    
    )
  }
}
export default GenreCheckboxScroll;