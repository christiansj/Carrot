import React from 'react';
import PropTypes from 'prop-types';

const authorNames = (props = {}) => {
    const { authors } = props;
    return (
        <div className="book-author">
            By
            {authors.map((authorJSON, index) => {
                return (<span key={`author-name-${index}`}>
                    {` ${authorJSON.firstName} ${authorJSON.lastName}`}
                </span>)
            })}
        </div>
    );
}

authorNames.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};


export default authorNames;