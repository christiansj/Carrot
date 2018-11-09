import React from 'react';
import DropDown from "./../../services/drop-down";
const bookRow = () => (
  <tr className="author-dashboard profile-book">
    <td style={{textAlign: "left", minWidth: "400px"}}>
     
      <div className="book" style={{ height: "125px", width: "90px", float: "left" }} />
      <h4>This is the title</h4>
      #ISBN

    </td>
    <td>
      <span class="badge badge-success " style={{height: "30px", fontSize: "18px" }}>Uploaded</span>
    </td>
    <td style={{textAlign: "left", minWidth: "100px"}}>
      {DropDown("Actions",["Update", "Delete"])}
    </td>
   
  </tr>
);

export default bookRow;