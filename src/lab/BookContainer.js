import React from "react";
import StarButton from "./../services/StarButton";
/**
 * 
 * @param {*} bookImage 
 */
export default function (bookImage) {
  return (
    <div className="bookContainer">
      <img className="bookCover" src={bookImage} style={{boxShadow: "3px 3px"}} />
      <br />
      
      <button
        className="btn btn-warning btn-lg btn-block"
        style={{ fontWeight: "bold", padding: "10px" }}>
        Read a Sample
              </button>
      <hr />
      <button className="btn btn-lg bg-primary"
      style={{ width: "50%", color: "white", fontWeight: "bold" }}>
        Share
      </button>
      <button
        className="btn btn-lg bg-info"
        style={{
          width: "50%", backgroundColor: "lightblue",
          color: "white", fontWeight: "bold"
        }}>
        Tweet
              </button>
              <StarButton isStarred={false}/>
    </div>
  )
}