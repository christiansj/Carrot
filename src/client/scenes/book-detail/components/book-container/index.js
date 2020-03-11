import React from "react";
import StarButton from "client/services/book-properties/StarButton";

/**
 * 
 * @param {String} imgPath 
 */
export default function (props = {}) {
  const  {bookId, bookJSON} = props;
  const performanceURL = `/book/${bookId}-${bookJSON.title}/performance`
  return (
    <div className="bookContainer">
      <img className="bookCover" src={"http://localhost:8080/"+bookJSON.imagePath+"0.jpg"} alt={`${bookJSON.title} cover`} />
      <br />
      <a className="btn btn-secondary btn-fill performanceButton" onClick={()=> {alert(performanceURL)}}>
        View Performance
      </a>
     
      <hr />
     
      <StarButton isStarred={false}/>
    </div>
  )
}

