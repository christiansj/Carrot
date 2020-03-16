import React from 'react';
import { Input, TextArea } from "client/components/forms/exports";
import PropTypes from 'prop-types';

const formRow = (props = {}) => {
    const { name, label, value, emitEvent, blurEvent } = props;
    if (name === "description") {
        return TextArea(name, label, 3, value, emitEvent, blurEvent);
    }

    var type = inputType(name, value);
    return (
    <div data-test="formRowComponent">
        {Input({...props, type})}
    </div>
    )

}

function inputType(name, value) {
    if (typeof (value) === "number") {
        return "number";
    } else if (name === "email") {
        return "email";
    } else if (name.match("password") || name.match("Password")) {
        return "password";
    }
    return "text";
}

formRow.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    emitEvent: PropTypes.func.isRequired,
    blurEvent: PropTypes.func
}

export default formRow;