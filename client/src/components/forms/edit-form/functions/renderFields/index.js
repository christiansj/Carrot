import React from 'react'
import formRow from './../../../form-row';

function renderFields(props={}) {
    const {requestBody, handleInputChange} = props;
    return Object.keys(requestBody).map((key, index) => {
        const name = key;
        const value = requestBody[key];
        const formRowConfig = {
            name,
            label: name,
            value,
            emitEvent: handleInputChange
        }
        return (
            <span key={`edit-form-field-${index}`}>
                {formRow(formRowConfig)}
            </span>)
    })
}

export default renderFields;