function toggleEditFields(isEditMode) {
    var inputDisplay = "inline";
    var display = "none";
    if (!isEditMode) {
        inputDisplay = "none";
        display = "inline";
    }
    var details = document.getElementsByClassName('detail');

    for (var i = 0; i < details.length; i++) {

        details[i].style.display = display;
    }

    var inputs = document.getElementsByClassName('detail-input');

    for (i = 0; i < inputs.length; i++) {
        inputs[i].style.display = inputDisplay;
    }
}

export default toggleEditFields;