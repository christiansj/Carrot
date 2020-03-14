import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../book-detail.css';
const bookDetailButtons = (props = {}) => {
  const { bookId, title, renderCreateButton, handleEditButton, updateBook } = props;
  return (
    <div data-test="bookDetailButtons">
      <button className="btn btn-warning btn-sm detail" data-test="readButton">
        Read
      </button>
      {authorButtons(bookId, title, renderCreateButton, handleEditButton, updateBook)}
    </div>
  );
}

//TODO create and destroy buttons rather than simply hiding/unhiding them
//they are still visible in inspect mode
function authorButtons(bookId, title, isRender, handleEditButton, updateBook) {
  if (isRender) {
    return (
      <span>
        <button className="btn btn-primary btn-sm detail" onClick={handleEditButton} type="button">
          Edit Info
        </button>
        <a
          href={`/${bookId}-${title}/chapterUpload/`}
          className="btn btn-success btn-sm detail"
          data-test="addChapterButton">
          Add a Chapter
        </a>
        <button className="btn btn-primary btn-sm detail-input" style={{ display: 'none' }} type="button" onClick={updateBook}>
          Save Changes
        </button>
        <button className="btn btn-secondary btn-sm detail-input" onClick={handleEditButton} style={{ display: 'none' }} type="button">
          Cancel
        </button>


      </span>

    )
  }
}
bookDetailButtons.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default bookDetailButtons;