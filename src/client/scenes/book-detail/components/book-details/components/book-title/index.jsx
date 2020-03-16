import React from 'react';
import PropTypes from 'prop-types';

function bookTitle(props = {}) {
    const {title} = props;
    return (
        <span id="book-title" className="book-title" data-test="bookTitleComponent">
            <span className="detail" data-test="bookTitle">
                {title}
            </span>
            {renderEditField(props)}
        </span>
    )

}

function renderEditField(props = {}){
    const {userIsAuthor, emitChange, editTitle} = props;
    if(userIsAuthor){
        return  <input type="text" className="detail-input" name="editTitle"
        onChange={emitChange} value={editTitle} data-test="bookTitleInput" />
    }
}

bookTitle.propTypes = {
    title: PropTypes.string.isRequired,
    editTitle: PropTypes.string.isRequired,
    userIsAuthor: PropTypes.bool.isRequired,
    emitChange: PropTypes.func.isRequired,
}

export default bookTitle;