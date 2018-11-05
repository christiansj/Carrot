import React from "react";
import "./service.css";
const A = [1, 2, 3, 4, 5];
/**
 * 
 * @param {*} filledBoxCnt 
 */
export default function FiveStarRating(filledBoxCnt){
    return(
      <div className="row">
        {A.map((box, index) => renderRatingBox(index, filledBoxCnt))}
      </div>
      
    )
}
function renderRatingBox(index, maxFillIndex){
  var boxColor;
  if(index < maxFillIndex){
    boxColor = "#DDDDDD";
  }else boxColor = "grey";

  return <div className="ratingBox" style={{backgroundColor: boxColor}}/>
}