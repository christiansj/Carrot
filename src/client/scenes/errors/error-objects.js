import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer, faHandPaper } from '@fortawesome/free-solid-svg-icons'
var errorDescriptions = {
  403: "Access to this page is forbidden",
  504: "A gateway timeout occurred. The server is unreachable. Try the request again later.",
 
};
var errorHeaders = {
  403: "Forbbiden",
  504: "Gateway Timeout"

}
var errorIcons = {
  403: <FontAwesomeIcon icon={faHandPaper}/>,
  504: <FontAwesomeIcon icon={faServer}/>
}
export{
  errorHeaders,
  errorDescriptions,
  errorIcons
}