import React from "react";

const DropdownMenu = (linkJSONs) => (
  <div class="dropdown-menu">
  {
    linkJSONs.map((linkJSON, index)=>{
      return <a className="dropdown-item" href={linkJSON.url}>
        {linkJSON.content}
      </a>
    })
  }
        
        <a class="dropdown-item" href="#" 
         data-toggle="modal"
         data-target="#signInModal"
        >Logout</a>
  </div>
)
export default DropdownMenu;