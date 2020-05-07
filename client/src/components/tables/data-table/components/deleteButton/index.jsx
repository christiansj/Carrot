import React from 'react';
import PropTypes from 'prop-types';

const deleteButton = (props = {}) => {
    const { data, setActiveItem } = props;
    return (
        <button
            className="btn btn-danger btn-sm" type="button"
            data-toggle="modal" data-target="#deleteModal"
            onClick={() => setActiveItem(data)}
            data-test="deleteCrudButton"
        >
            Delete
        </button>
    )
}


deleteButton.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dataName: PropTypes.string.isRequired
    }),
    setActiveItem: PropTypes.func
};

export default deleteButton;