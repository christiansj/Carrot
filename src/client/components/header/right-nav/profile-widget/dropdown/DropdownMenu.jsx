import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = (props = {}) => {
  const { links, logoutUser } = props;
  
  return (
    <div class="dropdown-menu" data-test="dropdownComponent">
      {
        links.map((linkJSON, index) => {
          return (
          <a className="dropdown-item" href={linkJSON.url} 
          key={`dropdown-item-${index}`} data-test="dropdownLink">
            {linkJSON.content}
          </a>)
        })
      }
      <a className="dropdown-item" href="/" onClick={logoutUser}>
        Logout
    </a>

    </div>
  )
}

DropdownMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    content: PropTypes.string
  })),
  logoutUser: PropTypes.func
}

export default DropdownMenu;