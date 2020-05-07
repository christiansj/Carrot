import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel} from '@fortawesome/free-solid-svg-icons';
import {roles} from './../../constants/user'; 
function banButton (role, handleClick){
  
  if(role === roles.BANNED){
    return (
      <button className="btn btn-success btn-sm">
     
      Unban User</button>
    )
  }
  return(
    <button className="btn btn-danger btn-sm"
    data-toggle="modal" data-target="#banModal" onClick={()=>handleClick}>
    <FontAwesomeIcon icon={faGavel}/>&nbsp;
    Ban User</button>
  )
}


export default banButton;
