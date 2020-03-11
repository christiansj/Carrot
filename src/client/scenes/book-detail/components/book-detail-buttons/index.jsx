import React from 'react';
import PropTypes from 'prop-types';

const bookDetailButtons = (props = {}) => {
    const {bookId, title} = props;
    return(
        <div>
          <button className="btn btn-warning btn-lg" style={{ padding: "5px 35px" }}>
            Reads
          </button>
          <a
            href={`/${bookId}-${title}/chapterUpload/`}
            className=" btn-success btn-lg"
            style={{ fontWeight: "bold", padding: "10px" }}>
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