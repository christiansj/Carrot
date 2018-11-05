import React from "react";
/**FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faBook, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import {faComments} from "@fortawesome/free-regular-svg-icons"
var linkJSONs = [];
//link JSON property arrays
const linkTexts = ["All Authors", "All Books", "All Genres",  "Create Author", "Create Book", "Create Genre"];
const linkIcons = [faGlasses, faBook,  faGrinStars, faGlasses, faBook, faGrinStars];

const tableNames = ["Author", "Book", "Genre"];

//create link JSONs
for(var i = 0; i < linkTexts.length; i++){
  var jason = new Object();
  jason["text"] = linkTexts[i];
  jason["icon"] = <FontAwesomeIcon icon={linkIcons[i]} style={{width: "20px", marginRight: "10px"}}/>;
  linkJSONs.push(jason);
}
export {
  linkJSONs,
  tableNames
  
};