import React, { Component } from 'react';
import GenreBookCover from './components/GenreBookCover';
import ApiService from './../../services/Api';
import './genre-books.css';
//TODO if no books are found, redirect to "We couldn't find what you were looking for page"
class GenreBookView extends Component {
  state = { bookMatches: [] }

  componentDidMount() {
    const { genreName } = this.props.match.params;
    new ApiService().execute("GET", `genre/books/${genreName}`)
      .then(res => this.setState({ bookMatches: res.data }))
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
          {evenOutRow(this.state.bookMatches.length)}
        </div>
      </div>
    );
  }
}

function evenOutRow(bookCnt){
  if(bookCnt % 2 === 0){
    return;
  }
  return <div className="col-6"/>
}

export default GenreBookView;

