import React from "react";
import DropdownMenu from "../../dropdown"
import PropTypes from 'prop-types';

export default function ProfileDropdown(props={}) {
  const {onlineUser, links, logoutUser} = props;

  const dropdownProps = {
    links,
    logoutUser
  }

  return (
    <div className="btn-group" data-test="splitDropdownComponent">
      <a href={`/user/${onlineUser.username}`} className="btn btn-primary">
        <img src={onlineUser.picture} style={{ height: '40px', width: '40px' }} alt={''}/>
        {onlineUser.username}
      </a>
      <button type="button" className={"btn dropdown-toggle dropdown-toggle-split btn-primary"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>

      {DropdownMenu(dropdownProps)}
    </div>
  )
}

ProfileDropdown.propTypes = {
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