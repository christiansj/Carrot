import React from 'react'
import formRow from './../../../form-row';


function renderFields(props) {
    const { requestBody, changeEvent, blurEvent, uniqueFields } = props;
    return Object.keys(requestBody).map((key, index) => {
        const name = key;
        const value = requestBody[key];
        const isRenderExistsErr = uniqueFields.find(item => item === name) !== undefined;

        const formRowConfig = {
            name,
            label: name,
            value,
            emitEvent: changeEvent,
            blurEvent
        }

        return (
            <span key={`edit-form-field-${index}`}>
                {formRow(formRowConfig)}
                {alreadyExistsErr(name, value, isRenderExistsErr)}
            </span>)
    })
}

function alreadyExistsErr(name, value, isRender) {
    if (isRender) {
        return (
            <p id={`${name}-exists-error`} className='field-error exists-error'>
                {value} already exists!
            </p>
        )
    }
}

export default renderFields;