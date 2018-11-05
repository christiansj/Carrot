import React from "react";
/**
 * Iterates through all inputs 
 * placing them in the same row.
 * @param {Array} inputs 
 */
const createFormRow = (inputs) => (
  <div className="form-row">
    {inputs.map((inputElement, index) => {
      return (
        <div className="col" key={index+"inputElement"}>
          {inputElement}
        </div>
      )
    })}
  </div>
);
export default createFormRow;