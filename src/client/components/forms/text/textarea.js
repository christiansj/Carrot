import React from "react";

const TextArea = (name, label, rowCnt, value, emitEvent) => (
  <div className="form-group">
    <label for="exampleFormControlTextarea1">{label}</label>
    <textarea id={`${name}-input-field`} className="form-control create-field" name={name} value={value} id={name+"-text-area"} rows={rowCnt} onChange={emitEvent}/>
  </div>
);
export default TextArea;