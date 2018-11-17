import React from 'react';
const renderCheckBox = (name, checkboxJSON) => (
  <div className="row">
    <input type="checkbox" name={checkboxJSON.text} defaultChecked={checkboxJSON.isTrue} name={name+"."+checkboxJSON.text}/>
    <label for={checkboxJSON.text}>{checkboxJSON}</label>
  </div>
)
function checkBoxScroll(name, checkBoxJSONs) {
  return (
    <article >
      <h2>{name}</h2>
      <div className="check-box scroll">
      {
        checkBoxJSONs.map((checkboxJSON, index) => {
          return renderCheckBox(name, checkboxJSON);
        })
      }
      </div>
    
    </article>
  )

}
export default checkBoxScroll;