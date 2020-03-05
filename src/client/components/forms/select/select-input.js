import React from "react";

const SelectInput = (name, items, changeEvent) => (
  <div>
    <h2>{name}</h2>
    <select id={name+"Select"}class="custom-select" onChange={changeEvent} required>
      <option value={items[0]}>{items[0]}</option>
      {items.slice(1).map((item, index) => {
        return <option value={item}>{item}</option>
      })}
    </select>
  </div>
)
export default SelectInput;