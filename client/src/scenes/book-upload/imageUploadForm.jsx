import React from 'react'
import "./book-upload.css";

function previewImage(changeFunc, event) {
  const { files } = event.target;
  const file = files[0];
  if(!file ){
    return;
  }
  const fileReader = new FileReader();
  var uploadCover = document.getElementById("uploadCover");
  
  fileReader.onload = () => {
    uploadCover.style.backgroundImage = `url(${fileReader.result})`;
  };
  fileReader.readAsDataURL(file);
  changeFunc(event);
}

const bookCoverForm = (changeEvent) => (
  <form className="book-upload container row" encType="multipart/form-data" >
    <article src="" alt="book-cover" id="uploadCover" className="cover-image" />
    <input type="file" accept="image/*" name="book-cover" 
	id="book-cover" onChange={(event)=>previewImage(changeEvent, event)} />
  </form>
);
export default bookCoverForm;