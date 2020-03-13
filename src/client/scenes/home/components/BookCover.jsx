import React from 'react';
const renderPNG = (pngCheck, bookJSON, e) =>{
  if(pngCheck) return;
  e.target.src = `http://localhost:8080/${bookJSON.imagePath}0.png`;
}

const bookCover = (bookJSON) => {
  var pngCheck = false;
  const imagePath = `http://localhost:8080/${bookJSON.imagePath}0.jpg`;

  return (
    <img src={imagePath} height="300" width="215" alt={bookJSON.title}
      className='book-cover'
      onError={(e) => {
        renderPNG(pngCheck, bookJSON, e);
        pngCheck = true;
      }}
    />
  )
}
export default bookCover;