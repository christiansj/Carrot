import React from 'react';
import bookCover from 'client/components/book-cover';

const BookContainer = (props = {}) => {
  const {book} = props;
  const {bookId, title} = book;
  const url = `/book/${bookId}-${title}`;

  return (
    <div className="home-book cover">
      <a href={url} >
        {bookCover(props)}
        <br />
        <span style={{ padding: "10px", marginTop: "20px", color: "black" }}>
          <b ><big>{title}</big></b>
          <br />
          {/* <span style={{ padding: "10px" }}>by {`${bookJSON.firstName} ${bookJSON.lastName}`}</span> */}
        </span>
      </a>
    </div>
  )
};
export default BookContainer;