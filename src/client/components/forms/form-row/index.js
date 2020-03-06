import {Input, TextArea} from "client/components/forms/exports";

const formRow = (name, label, value, emitEvent, blurEvent) => {
    var inputType = "type";
    if(typeof(value) === "number"){
        inputType = "number";
    }else if(name === "email"){
        inputType = "email";
    }else if(name.match("password") || name.match("Password")){
        inputType = "password";
    }

    if(name === "description"){
        return TextArea(name, label, 3, value, emitEvent);
    }
    return Input(name, label, inputType, value, emitEvent, blurEvent)
}
export default formRow;