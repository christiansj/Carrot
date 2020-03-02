import React from "react";

const Input = (name, type, value, emitEvent, blurEvent) => (
  <div className="form-group">
    <label for={name+"-input"}>{capitalize(name)+":"}</label>
    <input type={type} name={name} id={`${name}-input-field`} value={value} className="form-control" onChange={emitEvent} onBlur={blurEvent}  />
    
  </div>

)

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default Input;