import React from "react";

const DropdownMenu = (linkJSONs, logoutUser) => (
  <div class="dropdown-menu">
  {
    linkJSONs.map((linkJSON, index)=>{
      return <a className="dropdown-item" href={linkJSON.url}>
        {linkJSON.content}
      </a>
    })
  }
  <a className="dropdown-item" href="/" onClick={logoutUser}>
    Logout
  </a>
        
  </div>
)
export default DropdownMenu;