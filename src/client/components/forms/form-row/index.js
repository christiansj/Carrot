import {Input, TextArea} from "client/components/forms/exports";

const formRow = (name, label, value, emitEvent, blurEvent) => {
    var inputType = "type";
    if(typeof(value) === "number"){
        inputType = "number";
    }

    if(name === "description"){
        return TextArea(name, label, 3, value, emitEvent);
    }
    return Input(name, label, inputType, value, emitEvent, blurEvent)
}
export default formRow;