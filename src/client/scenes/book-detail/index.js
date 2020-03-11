import React, { Component } from "react";

import {authorNames, BookContainer, bookDetailButtons, ChapterList, genreTags} from "./components";
import { parseBookUrl } from './functions';

import axios from 'axios';
import "./book-detail.css";

class BookDetail extends Component {
  state = {
    bookJSON: {}, authorJSONs: [],
    genreJSONs: [], chapterTitles: []
  }

  componentDidMount() {
    this.fetchAll();
  }

  fetchAll() {
    const { bookId } = parseBookUrl(this.props.location);
    axios.all([getBook(bookId), getGenres(bookId), getAuthors(bookId)])
      .then(axios.spread((book, genres, authors) => {
        this.setState({
          bookJSON: book.data,
          genreJSONs: genres.data,
          authorJSONs: authors.data
        });
      }));
  }

  render() {
    const { bookJSON, authorJSONs, genreJSONs } = this.state;
    const { bookId } = parseBookUrl(this.props.location);

    const bookButtonsConfig = {
      bookId,
      title: bookJSON.title
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

export default BookDetail;