function resetErrorMessages(){
    const errors = document.getElementsByClassName("field-error");
    for(var i = 0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
}

function resetFieldBorders(){
    const fields = document.getElementsByClassName("create-field");
    for(var i = 0; i < fields.length; i++){
        fields[i].style.border = "1px solid transparent";
    }
}

function resetFormErrors(){
    resetErrorMessages();
    resetFieldBorders();
}

export default resetFormErrors;