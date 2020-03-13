import React, { Component } from 'react';
import ApiService from 'client/services/Api'
import { Link } from 'react-router-dom';

class SpotlightSlide extends Component {
    state = {
        genres: []
    }
    constructor(props){
        super(props);
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

export default SpotlightSlide;