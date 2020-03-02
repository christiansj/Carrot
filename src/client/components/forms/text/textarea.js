import React from "react";

const TextArea = (name, rowCnt, value, emitEvent) => (
  <div className="form-group">
    <label for="exampleFormControlTextarea1">{name}</label>
    <textarea className="form-control" name={name} value={value} id={name+"-text-area"} rows={rowCnt} onChange={emitEvent}/>
  </div>
);
export default TextArea;