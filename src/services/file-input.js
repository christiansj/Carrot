import React from "react";

const FileInput = (legend) => (
  <fieldset>
  <legend>{legend}</legend>

  <div>
      <label for="name">Display name:</label>
      <input type="text" id="name" name="name"/>
  </div>

  <div>
      <label for="avatar">Profile picture:</label>
      <input type="file"
             id="avatar" name="avatar"
             accept="image/png, image/jpeg" />
  </div>

</fieldset>

)

export default FileInput;