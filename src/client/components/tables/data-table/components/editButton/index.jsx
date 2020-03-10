import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const editButton = (props = {}) => {
    const {tableName, data, setActiveItem} = props;
    return (
        <Link to={`/admin-dashboard/edit/${tableName}/${data.id}`}
            className="btn btn-success btn-sm"
            onClick={() => setActiveItem(data)}
            data-test="editCrudButton"
        >
            Edit
        </Link>
    )
}

editButton.propTypes = {
    tableName: PropTypes.string.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dataName: PropTypes.string.isRequired
    }),
    setActiveItem: PropTypes.func
};

export default editButton;
