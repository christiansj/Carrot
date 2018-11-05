import React from "react";

/**
 * 
 * @param {String} name 
 * @param {Array String} items 
 */
const CheckboxRow = (name, items) => (
  <div className="row" name={name}>
    <label style={{margin: "auto 0px"}}>{name}&nbsp;</label>
    
    {items.map((item, index) => {
      return (
        <div className="form-check" key={item+index+"checkBox"}>
          <input className="form-check-input" type="checkbox" id={item} name={name+"."+item}/>
          <label className="form-check-label" for={item}>
            {item}
          </label>
        </div>
      )
    })}
  </div>
);

export default CheckboxRow;