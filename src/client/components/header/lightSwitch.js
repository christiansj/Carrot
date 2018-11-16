import React from "react";
import SETTINGS from "./../../config/settings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMoon} from '@fortawesome/free-solid-svg-icons'

function alterTheme(){
  if(SETTINGS["isDarkTheme"]){
    document.body.style.backgroundColor = "black";
  }else{
    document.body.style.backgroundColor = "white";
  }
  SETTINGS["isDarkTheme"] = !SETTINGS["isDarkTheme"];
}

const lightSwitch = (
  <button className="btn btn-primary" type="button">
    <FontAwesomeIcon icon={faMoon}/>
  </button>
)

export default lightSwitch;