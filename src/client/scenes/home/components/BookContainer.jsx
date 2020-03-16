import React from 'react';
import bookCover from 'client/components/book-cover';

const BookContainer = (props = {}) => {
  const { book, index } = props;
  const { title } = book;

  return (
    <div className="home-book cover" key={`${title}-${index}`}>

      {bookCover(props)}
      <br />
      <span style={{ padding: "10px", marginTop: "20px", color: "black" }}>
        <b ><big>{title}</big></b>
        <br />
        {/* <span style={{ padding: "10px" }}>by {`${bookJSON.firstName} ${bookJSON.lastName}`}</span> */}
      </span>
    </div>
  )
};
export default BookContainer;