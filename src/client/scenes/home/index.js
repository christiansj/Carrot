import React, { Component } from 'react';
import BookRow from "./components/BookRow";
import "./home.css";
import ApiService from 'client/services/Api';
import BookUpload from 'client/scenes/book-upload';
import SpotlightSection from './components/spotlight-section';
class HomeScene extends Component {

  state = { genreJSONs: [] }
  /**
   * Get all genres from database.
   */
  componentDidMount() {
    new ApiService().execute("GET", "genre")
   
      .then(res => {
        const genreJSONs = res.data;
        console.log(genreJSONs);
        this.setState({ genreJSONs });
      })
  }

  render() {
    const { genreJSONs } = this.state;
    if (genreJSONs.length === 0) {
      return (null);
    }

    return (
      <div className="home-container ">
        <SpotlightSection/>
        {/* Render BookRow for every genre */}
        {
          genreJSONs.map((genre, index)=>{
            return <BookRow genreName={genre.name}/>
          })
        }
      </div>
    );
  }
}

export default HomeScene;