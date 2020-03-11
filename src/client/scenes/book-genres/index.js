import React, { Component } from 'react';
import GenreBookCover from './components/GenreBookCover';
import ApiService from 'client/services/Api';
import './genre-books.css';

class GenreBookView extends Component {
  state = { bookMatches: [] }

  componentDidMount() {
    const { genreName } = this.props.match.params;
    new ApiService().execute("GET", `genre/books/${genreName}`)
      .then(res => this.setState({ bookMatches: res.data }))
      .then(console.log(this.state.bookMatches))
      .catch(err => console.error(err.response.data))
  }

  render() {
    const { genreName } = this.props.match.params;

    return (
      <div className="genre-books-wrapper">
        <h1>{genreName} books</h1>
        <hr />
        <div className="row">
          {
            this.state.bookMatches.map((bookJSON, index) => {
              return GenreBookCover(bookJSON, bookJSON.title, index)
            })
          }
        </div>
      </div>
    );
  }
}

export default GenreBookView;

