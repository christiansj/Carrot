import React from 'react';
import bookCover from './BookCover';
import store from 'client/redux/stores/index';
import { setActiveRecord } from 'client/redux/actions/index';


const BookContainer = (bookJSON, bookTitle) => {
  const url = `/book/${bookJSON.bookId}-${bookTitle}`;
  const clickFunc = () => store.dispatch(setActiveRecord("activeRecord", bookJSON));

  return (
    <div className="home-book cover">
      <a href={url} onClick={clickFunc}>
        {bookCover(bookJSON)}
        <br />
        <span style={{ padding: "10px", marginTop: "20px", color: "black" }}>
          <b ><big>{bookJSON.title}</big></b>
          <br />
          <span style={{ padding: "10px" }}>by {`${bookJSON.firstName} ${bookJSON.lastName}`}</span>
        </span>
      </a>
    </div>
  )
};
export default BookContainer;