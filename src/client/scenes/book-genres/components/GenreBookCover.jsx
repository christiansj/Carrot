import React from 'react';
import bookCover from 'client/components/book-cover';

const GenreBookCover = (bookJSON, bookTitle, index) => {
  const bookCoverConfig = {
    book: bookJSON,
    height: 250,
    width: 150,
  }

  return (
    <div className="genre-book-cover container col-12 col-md-6" key={`book-cover-${index}`}>

      {bookCover(bookCoverConfig)}
      <span className="genre-book-cover details">
        <p>
          <a href={`/book/${bookJSON.bookId}-${bookTitle}`}>
            {bookJSON.title}
          </a>
          <br />
          {bookJSON.description}
        </p>
      </span>
    </div>
  )
}

export default GenreBookCover;