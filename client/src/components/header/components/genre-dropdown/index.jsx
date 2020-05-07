import React, { Component } from 'react';
import ApiService from './../../../../services/Api';

class GenreDropdown extends Component {
    state = { genres: [] }
    componentDidMount() {
        new ApiService().execute("GET", 'genre/with-books')
            .then(res=>this.setState({genres: res.data}))
    }
    render() {
        const {genres} = this.state;
        return (
            <span>
                <button type="button" className={"btn dropdown-toggle dropdown-toggle-split btn-primary"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span >Genres</span>
                </button>
                <div className="dropdown-menu" data-test="dropdownComponent">
                    {
                        genres.map((genre, index) => {
                            if(genre.name === "Spotlight"){
                                return null;
                            }
                            return (
                                <a className="dropdown-item" href={`/books/${genre.name}`}
                                    key={`dropdown-item-${index}-${genre.name}`} data-test="dropdownLink">
                                    {genre.name}
                                </a>)
                        })
                    }
                </div>
            </span>
        );
    }
}
export default GenreDropdown;