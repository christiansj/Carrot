import React, { Component } from 'react';
import Dropdown from './../dropdown';
import ApiService from 'client/services/Api';

class GenreDropdown extends Component {
    state = { genres: [] }
    componentDidMount() {
        new ApiService().execute("GET", 'genre')
            .then(res=>this.setState({genres: res.data}))
    }
    render() {
        const {genres} = this.state;
        return (
            <span>
                <button type="button" class={"btn dropdown-toggle dropdown-toggle-split btn-primary"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span >Genres</span>
                </button>
                <div className="dropdown-menu" data-test="dropdownComponent">
                    {
                        genres.map((genre, index) => {
                            if(genre.name === "Spotlight"){
                                return;
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