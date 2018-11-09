import React from "react";
import store from "./../../redux/stores/index";
import "./book-creator.css";
import { setActiveCreateForm } from "./../../redux/actions/index";

/**link colors */
const activeLinkColor = "black";
const unactiveLinkColor = "grey";
/**
 * An unordered list populated by the 
 * passed in {links} parameter.
 * 
 * An admin and/or author can use this
 * to switch between creating a book, genre, or author.
 * 
 * Notes: Only admins are able to create & remove authors
 * @param {String array} links 
 * 
 */
const containerNav = (links, activeIndex, hrIndex) => (
  <ul id="create-nav">
    <h2 style={{fontWeight: "bold", color: "grey", textAlign: "center", fontFamily: "'Secular One', sans-serif"}}>
      Database
    </h2>
    {links.map((linkJSON, index) => {
      return renderLink(linkJSON, index, activeIndex, hrIndex);
    })}
  </ul>
);

const renderLink = (linkJSON, index, activeIndex, hrIndex) => (
  <li key={linkJSON + index} >
    <a href="#" style={{ color: getLinkColor(index, activeIndex) }}
      onClick={() => store.dispatch(setActiveCreateForm(index))}
      className="container-link">
      {linkContent(linkJSON.icon, linkJSON.text)}
    </a>
    {renderLineBreak(index, hrIndex)}
  </li>
);

const linkContent = (icon, text) =>(
  <span>
    {icon}
    {text}
  </span>
);

function getLinkColor(index, currentIndex) {
  if (index == currentIndex) return activeLinkColor;

  return unactiveLinkColor;
}

function renderLineBreak(index, lineBreakIndex){
  if(index == lineBreakIndex -1){
    return <hr/>
  }
}
export default containerNav;