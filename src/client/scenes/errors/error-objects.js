import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'
var errorDescriptions = {
  504: "A gateway timeout occurred. The server is unreachable. Try the request again later."
};
var errorHeaders = {
  504: "Gateway Timeout"
}
var errorIcons = {
  504: <FontAwesomeIcon icon={faServer}/>
}
export{
  errorHeaders,
  errorDescriptions,
  errorIcons
}