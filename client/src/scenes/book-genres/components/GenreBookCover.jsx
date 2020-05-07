import React from 'react';
import bookCover from './../../../components/book-cover';

const GenreBookCover = (bookJSON, bookTitle, index) => {
  const bookCoverConfig = {
    book: bookJSON,
    height: 250,
    width: 150,
  }

  return (
    <div className="genre-book-cover container col-12 col-md-6" key={`book-cover-${index}`}>
      {bookCover(bookCoverConfig)}
      <span className="genre-book-cover details" >
        <p style={{textOverflow: 'ellipsis'}}>
          <a href={`/book/${bookJSON.bookId}-${bookTitle}`}>
            {bookJSON.title}
          </a>
          <br />
          <span >
            {bookJSON.description}
          </span>

        </p>
      </span>
    </div>
  )
}

export default GenreBookCover;