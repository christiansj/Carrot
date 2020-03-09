import React from "react";
import DropdownMenu from "./DropdownMenu";
import PropTypes from 'prop-types';

export default function SplitDropdown(props={}) {
  const {onlineUser, links, logoutUser} = props;

  const dropdownProps = {
    links,
    logoutUser
  }

  return (
    <div class="btn-group" data-test="splitDropdownComponent">
      <a href={`/user/${onlineUser.username}`} class="btn btn-primary">
        <img src={onlineUser.picture} style={{ height: '40px', width: '40px' }} />
        {onlineUser.name}
      </a>
      <button type="button" class={"btn dropdown-toggle dropdown-toggle-split btn-primary"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>

      {DropdownMenu(dropdownProps)}
    </div>
  )
}

SplitDropdown.propTypes = {
  onlineUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  }),
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    content: PropTypes.string
  })),
  logoutUser: PropTypes.func
}