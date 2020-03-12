import React from 'react';
const FONT_SIZES = ["small", "medium", "large", "x-large", "xx-large"];

function handleChange(e) {
  document.getElementById("ChapterContent").style.fontSize =
    FONT_SIZES[e.target.value];
}


const FONT_SIZE_RANGE =  (
    <input type="range" id="FontSizeRange"  className="row"
      style={{marginBottom: '10px'}}
      step="1" min="0" max="4"
      list="steplist"
      defaultValue="2" 
      onChange={(e) => { handleChange(e) }} />
);
export {FONT_SIZE_RANGE}