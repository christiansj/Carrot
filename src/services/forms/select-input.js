import React from "react";

const SelectInput = (name, items) => (
  <div>
     <label for="book-genre-form">{name}</label>
    <select class="custom-select" required>
      <option value="">{name}</option>
      {items.map((item, index) => {
        return <option value={item}>{item}</option>
      })}
    </select>
  </div>
)
export default SelectInput;