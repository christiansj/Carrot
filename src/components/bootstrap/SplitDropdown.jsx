import React from "react";
import DropdownMenu from "./DropdownMenu";
export default function SplitDropdown(userJSON, buttonClass, linkJSONs) {

  return (
    <div class="btn-group">
      <a href="" class={"btn " + buttonClass}>
        <img src={userJSON.picture} style={{ height: '40px', width: '40px' }} />
        {userJSON.name}
      </a>
      <button type="button" class={"btn dropdown-toggle dropdown-toggle-split " + buttonClass} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>

      {DropdownMenu(linkJSONs)}
    </div>
  )
}