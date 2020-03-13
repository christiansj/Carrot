import React, { Component } from 'react';
import PropTypes from 'prop-types';
const bookDetailButtons = (props = {}) => {
  const { bookId, title, renderCreateButton, handleEditButton } = props;
  return (
    <div data-test="bookDetailButtons">
      <button className="btn btn-warning btn-lg" style={{ padding: "5px 35px" }} data-test="readButton">
        Read
      </button>
      {authorButtons(bookId, title, renderCreateButton, handleEditButton)}
    </div>
  );
}

function authorButtons(bookId, title, isRender, handleEditButton) {
  if (isRender) {
    return (
      <span>
        <a
          href={`/${bookId}-${title}/chapterUpload/`}
          className=" btn-success btn-lg"
          style={{ fontWeight: "bold", padding: "10px" }}
          data-test="addChapterButton">
          Add a Chapter
        </a>
        <button className="btn btn-secondary" onClick={handleEditButton} type="button">
          Edit Book
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