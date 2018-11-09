import React from "react";

const DropDown = (name ,items) => (
  <div className="btn-group">
    {buttonDropdown(name)}
    <div className="dropdown-menu">
      {items.map((item, index) => {
        return (
          <a className="dropdown-item" key={item+index+"dropdown"} href="#">
            {item}
          </a>
        );
      })}
    </div>
  </div>
);

const buttonDropdown = (name) => (
  <button type="button"
      className="btn btn-primary dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      {name}
  </button>
)
export default DropDown;
