import React from 'react';
import "./book-upload.css";
import TextInput from "client/services/forms/text/text-input";
import TextArea from "client/services/forms/text/textarea";

// TODO make the container a form element
function bookUploadScene(){
  return(
    <div className="book-upload container">
      <h1>Upload Book</h1>
      <div className="book-upload upload-cover">
        <h3>Book Cover</h3>
        <article src="" alt="upload cover" className="cover-image"/>
        <br/>
        <input type="file"/>
      </div>
      <div className="book-upload upload-forms">
        {TextInput("title", "text", "title")}
        {TextArea("Description", 6)}
      </div>
    </div>
  )
}
export default bookUploadScene;