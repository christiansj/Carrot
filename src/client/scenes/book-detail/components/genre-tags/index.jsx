import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function genreTags(props = {}) {
    const { genres } = props;
    return genres.map((genre) => {
        return (
            <Link key={`genre-tag-${genre.genreId}`} to={`/books/${genre.name}`} className="genre-tag btn-lg">
                {genre.name}
            </Link>
        )
    })
}

genreTags.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({
        genreId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }))
};
export default genreTags;