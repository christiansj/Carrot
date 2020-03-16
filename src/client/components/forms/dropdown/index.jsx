import React from 'react';

const buttonDropdown = (name) => (
  <button type="button"
    className="btn dropdown-toggle"
    data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    {name}
  </button>
)

const Dropdown = (name, items) => (
  <div className="btn-group">
    {buttonDropdown(name)}
    <div className="dropdown-menu">
      <div >
        {items.map((item, index) => {
          return (
            <span >
              {item}
            </span>
          );
        })}
      </div>

    </div>
  </div>
);

export default Dropdown;