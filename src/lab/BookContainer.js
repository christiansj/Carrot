import React from "react";
import StarButton from "./../client/services/StarButton";
import Weebs from "./../images/book-covers/Weebs.jpg";

/**
 * 
 * @param {String} imgPath 
 */
export default function (imgPath) {
  return (
    <div className="bookContainer">
      <img className="bookCover" src={Weebs} alt={"This wer"}style={{boxShadow: "3px 3px"}} />
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

function renderImage(imgPath){
  var img = null;
  try{
    img = require(imgPath);
  }catch(err){
    console.log("Image Load Error: " + err);
  }
  return img;
}