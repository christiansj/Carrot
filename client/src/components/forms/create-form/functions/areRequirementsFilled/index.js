function areRequiredsFilled(props = {}) {
    const {requestBody, requiredFields} = props;
    for (var i = 0; i < requiredFields.length; i++) {
        var fieldName = requiredFields[i];
        if (requestBody[fieldName].toString().trim() === "") {
            return false;
        }
    }
    return true;
}

export default areRequiredsFilled;