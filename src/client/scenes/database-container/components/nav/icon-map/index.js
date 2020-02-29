import React from "react";
/**FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGrinStars, faUser } from "@fortawesome/free-solid-svg-icons";

const linkJSON = {
    "book": <FontAwesomeIcon icon={faBook} style={{width: "20px", marginRight: "10px"}}/>,
    "user": <FontAwesomeIcon icon={faUser} style={{width: "20px", marginRight: "10px"}}/>,
    "genre": <FontAwesomeIcon icon={faGrinStars} style={{width: "20px", marginRight: "10px"}}/>
}
export default linkJSON;