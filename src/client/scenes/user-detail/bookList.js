import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faPen } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import bookCover from "client/components/book-cover"

const bookList = (bookJSONs) => (
  <article className="booklists">
    <nav className="row" style={{ margin: 'auto' }}>
      <h2>
        <NavLink to="/" style={{ marginRight: '35px' }}>Written <FontAwesomeIcon icon={faPen} /></NavLink>
      </h2>
      &nbsp;&nbsp;
            <h2>
        <NavLink to="/">Reading <FontAwesomeIcon icon={faBookReader} /></NavLink>
      </h2>

    </nav>
    <hr />
    {
      bookJSONs.map((bookJSON, index) => {
        const bookCoverConfig = {
          height: 150,
          width: 100,
          book: bookJSON
        }
        return (<div className="book-container" key={`user-book-${index}`}>
          {bookCover(bookCoverConfig)}
          <a href={`/book/${bookJSON.bookId}-${bookJSON.title}`}>
            {bookJSON.title}</a>
          <br />
          {bookJSON.description}
        </div>)
      })
    }
  </article >
);
export default bookList;