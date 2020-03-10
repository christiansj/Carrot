import React from 'react';

import PropTypes from 'prop-types';

import editButton from './editButton';
import deleteButton from './deleteButton';
import viewButton from './viewButton';


const renderCrudButtons = (props = {}) => {
    const { tableName, data, isRenderLinks, setActiveItem } = props;
    if (!isRenderLinks) {
        return null;
    }

    return (
        <td data-test="crudButtonCell">
            {viewButton({tableName, id: data.id})}
            {editButton({ tableName, data, setActiveItem })}
            {deleteButton({ data, setActiveItem })}
        </td>
    )
}

renderCrudButtons.propTypes = {
    tableName: PropTypes.string.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dataName: PropTypes.string.isRequired
    }),
    isRenderLinks: PropTypes.bool,
    setActiveItem: PropTypes.func.isRequired
}

export default renderCrudButtons;