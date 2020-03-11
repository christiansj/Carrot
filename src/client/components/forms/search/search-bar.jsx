import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ApiService from 'client/services/Api';
import './search-bar.css';
const bookMatchesContent = (bookMatches) => (
  <div>
    <b>Books</b>
    {bookMatches.map((result, index) => {
      return (<a href={"/book" + result.url} className="row" key={`search-result-${index}`}>
        {result.dataName}
      </a>)
    })}
  </div>
)

class SearchBar extends Component {
  state = { bookMatches: [] }

  filterResults() {
    const searchQuery = document.getElementById("HeaderSearchBar").value;
    new ApiService().execute("GET", `/search/Book/${searchQuery}`)
      .then(res => this.setState({ bookMatches: res.data }))
      .catch(err => { console.log(err) });

    var displayStyle = "block"
    if (searchQuery.trim() === "") {
      displayStyle = "none";
    }
    document.getElementById("SearchDropDown").style.display = displayStyle;
    this.render();
  }
  render() {
    return (
      <div className="search-container">
        <input id="HeaderSearchBar" type="search" placeholder="search for books..." 
        onKeyUp={() => this.filterResults()} />
        
        <button className="btn btn-primary btn-sm" style={{ marginLeft: "-35px", borderRadius: "15px" }}>
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <div className="search-drop-down" id="SearchDropDown">
          {bookMatchesContent(this.state.bookMatches)}
        </div>
      </div>

    );
  }
}

export default SearchBar;