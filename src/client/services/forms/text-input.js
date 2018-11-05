import React from "react";

const TextInput = (name, type, placeholder) => (
  <div>
    <label for={name+"-form"}>{capitalize(name)+":"}</label>
    <input type={type} name={name} id={name+"-form"} placeholder={placeholder} className="form-control" />

  </div>

)
function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default TextInput;