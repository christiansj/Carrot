import React, { Component } from 'react';
import BookRow from "./components/BookRow";
import "./home.css";
import ApiService from 'client/services/Api';
import SpotlightSection from './components/spotlight-section';


class HomeScene extends Component {

  state = { genreJSONs: [] }

  componentDidMount() {
    new ApiService().execute("GET", "genre")
      .then(res => {
        this.setState({ genreJSONs: res.data });
      })
  }

  render() {
    const { genreJSONs } = this.state;
    if (genreJSONs.length === 0) {
      return null;
    }

    return (
      <div className="home-container ">
        <SpotlightSection />
        {
          genreJSONs.map((genre, index) => {
            const rowConfig = {
              genreName: genre.name,
              index
            }
            return <BookRow {...rowConfig} key={`${genre.name}-${index}`}/>
          })
        }
      </div>
    );
  }
}

export default HomeScene;