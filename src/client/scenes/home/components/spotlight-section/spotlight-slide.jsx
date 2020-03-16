import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ApiService from 'client/services/Api';
import BookCover from 'client/components/book-cover';

class SpotlightSlide extends Component {
    constructor(props){
        super(props);
        this.state = {
            genres: []
        }
        this.fetchGenres();
    }


    fetchGenres(){
        const { bookId } = this.props.book;
        new ApiService().execute('GET', `book/genres/${bookId}`)
            .then(res => this.setState({ genres: res.data }))
    }

    render() {
        const { book } = this.props;
        const {genres} = this.state;

        const { bookId, description, title } = book;

        const bookCoverConfig = {
            height: 350,
            width: 240,
            book
        }

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
    
    
                        <p>{description}</p>
                        {renderGenreTags(genres)}
                    </div>
                </div>
                <div className="spotlight-book col-md-5 col-sm-12">
                    {BookCover(bookCoverConfig)}
                </div>
            </div>
        )
    }
}

function renderGenreTags(genres) {
    return genres.map((genre, index) => {
        if (genre.name === "Spotlight") {
            return null;
        }
        return (
            <span className="badge badge-secondary" key={`spotlight-${genre.name}-${index}`}>
                {genre.name}
            </span>
        )
    })
}

export default SpotlightSlide;