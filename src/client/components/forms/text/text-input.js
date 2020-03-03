import React from "react";
import "./../forms.css";
const Input = (name, label, type, value, emitEvent, blurEvent) => (
  <div className="form-group">
    <label for={name+"-input"}>{capitalize(label)+":"}</label>
    <input type={type} name={name} id={`${name}-input-field`} value={value} className="form-control create-field" onChange={emitEvent} onBlur={blurEvent}  />
    
  </div>

)

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default Input;