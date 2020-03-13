import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = (props = {}) => {
  const { links, logoutUser} = props;

  return (
    <div class="dropdown-menu" data-test="dropdownComponent">
      {
        links.map((linkJSON, index) => {
          return (
            <a className="dropdown-item" href={linkJSON.url}
              key={`dropdown-item-${index}-${linkJSON.content}`} data-test="dropdownLink">
              {linkJSON.content}
            </a>)
        })
      }
      {renderLogout(logoutUser)}

    </div>
  )
}
function renderLogout(logoutUser) {
  if (logoutUser !== undefined) {
    return (
      <a className="dropdown-item" href="/" onClick={logoutUser}>
        Logout
      </a>
    )
  }
}
DropdownMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })),
  logoutUser: PropTypes.func
}

export default DropdownMenu;