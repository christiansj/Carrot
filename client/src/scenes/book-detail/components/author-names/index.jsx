import React from 'react';
import PropTypes from 'prop-types';

const authorNames = (props = {}) => {
    const { authors } = props;
    return (
        <div className="book-author" data-test="authorNamesComponent">
            By
            {authors.map((authorJSON, index) => {
                return (<span key={`author-name-${index}`} data-test="authorName">
                    {` ${authorJSON.firstName} ${authorJSON.lastName}`}
                </span>)
            })}
        </div>
    );
}

authorNames.propTypes = {
    authors: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }))
};

export default authorNames;