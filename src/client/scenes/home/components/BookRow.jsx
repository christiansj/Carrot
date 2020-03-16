import React, { Component } from 'react';
import BookContainer from './BookContainer';
import ApiService from 'client/services/Api';
import PropTypes from 'prop-types';

export default class BookRow extends Component {
  state = { bookJSONs: [] }


  componentDidMount() {
    new ApiService().execute("GET", `/genre/books/${this.props.genreName}/`)
      .then(res => this.setState({ bookJSONs: res.data }))
      .catch((err) => { console.log(err) });
    this.forceUpdate();
  }

  render() {
    const { bookJSONs } = this.state;
    const { genreName, index } = this.props;
    // don't render if there are no books
    if (bookJSONs.length <= 0 || genreName === "Spotlight") {
      return (null);
    }

    return (
      <section className="home-book-row" key={`home-bookrow-${index}`}>
        <h1>{genreName}</h1>
        <hr />
        {/* Render all BookCovers under this genre */}
        <span className="row" style={{ marginLeft: "30px" }}>
          {bookJSONs.map((item, index) => {
            const bookCoverConfig = {
              book: item,
              width: 215,
              height: 300,
            }

            return (
              <span key={`${item.title}-${index}`}>
                {BookContainer(bookCoverConfig)}
              </span>
            )
          }
          )}
        </span>
      </section>
    );
  }
}
BookRow.propTypes = {
  genreName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}
