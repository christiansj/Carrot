import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const viewButton = (props = {}) => {
    const { tableName, id } = props;
    return (
        <Link to={`/admin-dashboard/view/${tableName}/${id}`}
            className="btn btn-warning btn-sm"
            data-test="viewCrudButton"
        >
            View
        </Link>
    )
}

viewButton.propTypes = {
    tableName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default viewButton;