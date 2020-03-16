import React from "react";

const TextArea = (name, label, rowCnt, value, emitEvent, blurEvent) => (
  <div className="form-group" data-test="textAreaComponent">
    <label for="exampleFormControlTextarea1">{label}</label>
    <textarea id={`${name}-input-field`} className="form-control create-field" name={name} value={value} rows={rowCnt} onChange={emitEvent} onBlur={blurEvent}/>
  </div>
);
export default TextArea;