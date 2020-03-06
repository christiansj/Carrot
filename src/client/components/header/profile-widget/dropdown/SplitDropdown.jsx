import React from "react";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
export default function SplitDropdown(userJSON, linkJSONs, logoutUser) {

  return (
    <div class="btn-group">
      <Link to={`/user/${userJSON.username}`} class="btn btn-primary">
        <img src={userJSON.picture} style={{ height: '40px', width: '40px' }} />
        {userJSON.name}
      </Link>
      <button type="button" class={"btn dropdown-toggle dropdown-toggle-split btn-primary"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>

      {DropdownMenu(linkJSONs, logoutUser)}
    </div>
  )
}