import React from "react";

const TextArea = (labelString, rowCnt) => (
  <div className="form-group">
    <label for="exampleFormControlTextarea1">{labelString}</label>
    <textarea className="form-control" name={labelString}id="exampleFormControlTextarea1" rows={rowCnt}/>
  </div>
);
export default TextArea;