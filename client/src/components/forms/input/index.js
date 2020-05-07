import React from "react";
import PropTypes from 'prop-types';
import "./../forms.css";
const Input = (props = {}) => {
    const { name, label, type, value, emitEvent, blurEvent } = props;
    return (
        <div className="form-group" data-test="inputComponent">
            <label htmlFor={name + "-input"}>{capitalize(label) + ":"}</label>
            <input aria-label={`${name}-input`}data-test="inputElement" type={type} name={name} id={`${name}-input-field`} value={value} className="form-control create-field" onChange={emitEvent} onBlur={blurEvent} />

        </div>
    )
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    emitEvent: PropTypes.func.isRequired,
    blurEvent: PropTypes.func
}

export default Input;