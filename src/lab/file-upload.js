import React from 'react';

const fileUpload = (name, labelText) => (
  <div>
    <h1>File Upload</h1>
    <form action="/fileUpload/picture/" method="POST"
    enctype="multipart/form-data">
      <div class="form-group">
        <label for={name}>{labelText}</label>
        <input type="file" className="form-control-file" id={name} name={name}/>
      </div>
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </form>
  </div>
);
export default fileUpload;