function isNoErrors() {
    const errors = document.getElementsByClassName("field-error");
    for (var i = 0; i < errors.length; i++) {
        if (errors[i].style.display !== "none") {
            return false;
        }
    }
    return true;
}

export default isNoErrors;