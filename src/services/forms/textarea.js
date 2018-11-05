import React from "react";

const TextArea = (labelString, row) => (
  <div className="form-group">
    <label for="exampleFormControlTextarea1">{labelString}</label>
    <textarea className="form-control" name={labelString}id="exampleFormControlTextarea1" rows={row}/>
  </div>
);
export default TextArea;