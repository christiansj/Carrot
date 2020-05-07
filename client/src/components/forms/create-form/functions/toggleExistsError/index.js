function toggleExistsError(props = {}) {
    const {name, statusCode} = props;
    const existsErrElem = document.getElementById(`${name}-exists-error`);
    const inputField = document.getElementById(`${name}-input-field`);
    if (statusCode === 200) {
        existsErrElem.style.display = "block";
        inputField.style.border = '1px solid red';
    } else if (statusCode === 204) {
        existsErrElem.style.display = "none";
        inputField.style.borderColor = 'transparent';
    }
}
export default toggleExistsError;