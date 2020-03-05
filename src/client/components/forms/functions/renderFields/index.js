import React from 'react';
import formRow from 'client/components/forms/form-row';

function renderFields(props={}) {
    const {requestBody, handleInputChange } = props;
    return Object.keys(requestBody).map((key, index) => {
        const name = key;
        const value = requestBody[key];
        return (
            <span key={`form-field-${index}`}>
                {formRow(name, name, value, handleInputChange)}
            </span>)
    })
}
export default renderFields;