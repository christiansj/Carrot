import React from 'react';
import PropTypes from 'prop-types';
//TODO only render add a chapter for online users who wrote the book (probably make this into a component and handle logic in mount func)
const bookDetailButtons = (props = {}) => {
    const {bookId, title} = props;
    return(
        <div data-test="bookDetailButtons">
          <button className="btn btn-warning btn-lg" style={{ padding: "5px 35px" }} data-test="readButton">
            Read
          </button>
          <a
            href={`/${bookId}-${title}/chapterUpload/`}
            className=" btn-success btn-lg"
            style={{ fontWeight: "bold", padding: "10px" }}
            data-test="addChapterButton">
            Add a Chapter
          </a>
        </div>
      );
}

bookDetailButtons.propTypes = {
    bookId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default bookDetailButtons;