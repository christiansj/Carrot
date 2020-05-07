import React, { Component } from 'react';

import chapterUploadView from './views/index';
import ApiService from './../../../services/Api';
import './chapter-upload.css';


export default class ChapterUploadScene extends Component {
  state = { chapterTitles: [], errMessage: "" }
  
  componentDidMount() {
    const {bookId} = this.props.match.params;
    new ApiService().execute("GET", `chapter/titles/${bookId}/`)
      .then(res => this.setState({ chapterTitles: res.data }))
      .catch(err=>{
        if(err.response.status === 400){
          this.setState({errMessage: "Could not find book"});
        }
      });
  }
  
  render() {
    const { bookId } = this.props.match.params;
    const {bookTitle} = this.props.match.params;
    const chapterNumber = this.state.chapterTitles.length + 1;
    const {errMessage} = this.state;

    if(errMessage !== ""){
      return (
      <h3>{errMessage}</h3>
      )
    }

    return chapterUploadView(bookId, bookTitle, chapterNumber)
  }
}