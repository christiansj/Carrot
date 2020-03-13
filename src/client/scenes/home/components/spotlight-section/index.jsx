import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiService from 'client/services/Api';
import './../../home.css';
class SpotlightSection extends Component {
    state = {
        books: [],
        genres: [],
        displayIndex: 0
    }
    componentDidMount() {
        new ApiService().execute('GET', 'genre/books/Spotlight')
            .then(res => this.setState({ books: res.data }))
            .then(() => {
                const { bookId } = this.state.books[0];
                new ApiService().execute('GET', `book/genres/${bookId}`)
                    .then(res => this.setState({ genres: res.data }))
            })
    }
    render() {
        const { books, displayIndex, genres } = this.state;
        const featuredBook = books[displayIndex];
        if (!books.length) {
            return null;
        }
        const { bookId, title } = featuredBook;
        return (
            <div className="spotlight-section row">

                <div className="spotlight-detail col-md-7 col-sm-12">
                    <h1>Spotlight</h1>
                    <div className="spotlight-detail-content">
                        <h3>
                            <Link to={`/book/${bookId}-${title}`}>
                                {title}
                            </Link>
                        </h3>


                        <p>{featuredBook.description}</p>
                        {renderGenreTags(genres)}
                    </div>
                </div>
                <div className="spotlight-book col-md-5 col-sm-12">
                    <div className="book-cover">

                    </div>
                </div>
            </div>
        )
    }
}
function renderGenreTags(genres) {
    return genres.map((genre, index) => {
        if (genre.name === "Spotlight") {
            return;
        }
        return (
            <span className="badge badge-secondary">
                {genre.name}
            </span>
        )
    })
}
export default SpotlightSection;