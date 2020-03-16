import React, { Component } from "react";

import { BookDetails, ChapterList, genreTags } from "./components";
import bookCover from 'client/components/book-cover';
import {isEmpty} from 'client/util';
import { parseBookUrl } from './functions';
import { connect } from 'react-redux';
import axios from 'axios';
import "./book-detail.css";

export class BookDetail extends Component {
  state = {
    bookJSON: {}, authorJSONs: [],
    genreJSONs: [], chapterTitles: [],
    userIsAuthor: false
  }

  componentDidMount() {
    this.fetchAll();
  }
  //TODO separate this function in its own file
  fetchAll() {
    const { bookId } = parseBookUrl(this.props.location);
    const { userId } = this.props.onlineUser;
    axios.all([getBook(bookId), getGenres(bookId), getAuthors(bookId), getBookAuthors(userId)])
      .then(axios.spread((book, genres, authors, bookAuthors) => {

        var { userIsAuthor } = this.state;
        if (bookAuthors.status === 204) {
          userIsAuthor = false;
        } else if (bookAuthors.data.find(item => item.bookId === bookId) !== undefined) {
          userIsAuthor = true;
        }

        this.setState({
          bookJSON: book.data,
          genreJSONs: genres.data,
          authorJSONs: authors.data,
          userIsAuthor
        });
      }));
  }

  render() {
    const { bookJSON, authorJSONs, genreJSONs, userIsAuthor } = this.state;
    const { bookId } = parseBookUrl(this.props.location);

    const genreTagsConfig = {
      genres: genreJSONs
    }
 
    const detailConfig = {
      book: bookJSON,
      authors: authorJSONs,
      userIsAuthor,
      location: this.props.location
    }
    const bookCoverConfig = {
      book: bookJSON,
      height: 450,
      width: 300
    }
    if(isEmpty(bookJSON)){
      return(
        <h1>Book not found</h1>
      )
    }
    return (
      <div className="book-detail">
        <div className="bookContainer">
          {bookCover(bookCoverConfig)}
        </div>

        <div className="bookDetail">
          <BookDetails {...detailConfig} />
          <br />
          {genreTags(genreTagsConfig)}

          <br />
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

function getBookAuthors(userId) {
  return axios.get(`http://localhost:8080/author/books/${userId}`)
}

function mapStateToProps(state) {
  return {
    onlineUser: state.onlineUser
  }
}
export default connect(mapStateToProps)(BookDetail);