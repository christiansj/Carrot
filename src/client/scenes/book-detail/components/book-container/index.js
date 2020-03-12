import React from "react";
import PropTypes from 'prop-types';
import StarButton from "client/services/book-properties/StarButton";

/**
 * 
 * @param {String} imgPath 
 */
function bookContainer(props = {}) {
  const  {bookId, bookJSON} = props;
  const performanceURL = `/book/${bookId}-${bookJSON.title}/performance`
  return (
    <div className="bookContainer" data-test="bookContainerComponent">
      {/* <img className="bookCover" src={"http://localhost:8080/"+bookJSON.imagePath+"0.jpg"} alt={`${bookJSON.title} cover`} /> */}
      <br />
      <a className="btn btn-secondary btn-fill performanceButton" onClick={()=> {alert(performanceURL)}}>
        View Performance
      </a>
     
      <hr />
     
      <StarButton isStarred={false}/>
    </div>
  )
}

bookContainer.propTypes = {
  bookId: PropTypes.number.isRequired,
  bookJSON: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
}

export default bookContainer;