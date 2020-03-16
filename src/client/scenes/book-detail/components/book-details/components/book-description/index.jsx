import React from 'react';
import PropTypes from 'prop-types';

function bookDescription(props = {}) {
    const { description } = props;

    return (
        <span id="book-description">
            <span className="detail" data-test="bookDescription">
                Preface: {description}
            </span>
            {renderEditField(props)}
        </span>
    )
}

function renderEditField(props = {}) {
    const { userIsAuthor, editDescription, emitChange } = props;
    if (userIsAuthor) {
        return <textarea rows={3} value={editDescription} name="editDescription"
            onChange={emitChange} className="detail-input" data-test="bookDescriptionInput" />
    }
}

bookDescription.propTypes = {
    description: PropTypes.string.isRequired,
    editDescription: PropTypes.string.isRequired,
    userIsAuthor: PropTypes.bool.isRequired,
    emitChange: PropTypes.func.isRequired,
}

export default bookDescription;