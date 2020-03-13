import React, { Component } from 'react';
import PropTypes from 'prop-types';
const bookDetailButtons = (props = {}) => {
  const { bookId, title, renderCreateButton } = props;
  return (
    <div data-test="bookDetailButtons">
      <button className="btn btn-warning btn-lg" style={{ padding: "5px 35px" }} data-test="readButton">
        Read
      </button>
      {addChapterButton(bookId, title, renderCreateButton)}
    </div>
  );
}

function addChapterButton(bookId, title, isRender) {
  if (isRender) {
    return (
      <a
        href={`/${bookId}-${title}/chapterUpload/`}
        className=" btn-success btn-lg"
        style={{ fontWeight: "bold", padding: "10px" }}
        data-test="addChapterButton">
        Add a Chapter
      </a>
    )
  }
}
bookDetailButtons.propTypes = {
  bookId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default bookDetailButtons;