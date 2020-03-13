import React, { Component } from "react";

import {authorNames, BookContainer, bookDetailButtons, ChapterList, genreTags} from "./components";
import { parseBookUrl } from './functions';
import {connect} from 'react-redux';
import axios from 'axios';
import "./book-detail.css";

export class BookDetail extends Component {
  state = {
    bookJSON: {}, authorJSONs: [],
    genreJSONs: [], chapterTitles: [],
    renderCreateButton: false
  }

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll() {
    const { bookId } = parseBookUrl(this.props.location);
    const {userId} = this.props.onlineUser;
    axios.all([getBook(bookId), getGenres(bookId), getAuthors(bookId), getBookAuthors(userId)])
      .then(axios.spread((book, genres, authors, bookAuthors) => {
        
        var {renderCreateButton} = this.state;
        if(bookAuthors.status === 204){
          renderCreateButton = false;
        }else if(bookAuthors.data.find(item=>item.bookId === bookId) !== undefined){
          renderCreateButton = true;
        }
        
        this.setState({
          bookJSON: book.data,
          genreJSONs: genres.data,
          authorJSONs: authors.data,
          renderCreateButton
        });
      }));
  }

  render() {
    const { bookJSON, authorJSONs, genreJSONs, renderCreateButton } = this.state;
    const { bookId } = parseBookUrl(this.props.location);

    const bookButtonsConfig = {
      bookId,
      title: bookJSON.title,
      renderCreateButton
    }

    const authorNamesConfig = {
      authors: authorJSONs
    }
    const genreTagsConfig = {
      genres: genreJSONs
    }
    const bookContainerConfig = {
      bookId,
      bookJSON
    }

    return (
      <div className="book-detail">
        {BookContainer(bookContainerConfig)}
        <div className="bookDetail">
          <span className="book-title">
            {bookJSON.title}
          </span>
          
          {authorNames(authorNamesConfig)}
          {bookDetailButtons(bookButtonsConfig)}

          <br /><br />
          Preface: {bookJSON.description}
          <br />
          {genreTags(genreTagsConfig)}
          <hr />

          <ChapterList bookId={bookId} bookTitle={bookJSON.title} />
        </div>
      </div>
    )
  }
}

function getBook(bookId) {
  return axios.get(`http://localhost:8080/book/${bookId}`)
}

function getGenres(bookId) {
  return axios.get(`http://localhost:8080/book/genres/${bookId}`)
}

function getAuthors(bookId) {
  return axios.get(`http://localhost:8080/book/authors/${bookId}`)
}

function getBookAuthors(userId){
  return axios.get(`http://localhost:8080/author/books/${userId}`)
}

function mapStateToProps (state) {
  return {
    onlineUser: state.onlineUser
  }
}
export default connect(mapStateToProps)(BookDetail);