import React from 'react';
/**
 * 
 * @param {JSON} bookJSON 
 * @param {string} bookTitle 
 */
const GenreBookCover = (bookJSON, bookTitle, index) => (
  <div className="genre-book-cover container col-12 col-md-6" key={`book-cover-${index}`}>
    <img src={"http://localhost:8080/" + bookJSON.imagePath + "0.jpg"}
      height="250" width="150" 
      className="genre-book-cover image" alt={`'${bookTitle}' cover`}/>
    <span className="genre-book-cover details" style={{ textAlign: 'left !important' }}>
      <p>
        <a href={`/book/${bookJSON.bookId}-${bookTitle}`} style={{ textAlign: 'left !important' }}>
          {bookJSON.title}
        </a>
        <br />
        {bookJSON.description}
      </p>
    </span>
  </div>
)

export default GenreBookCover;