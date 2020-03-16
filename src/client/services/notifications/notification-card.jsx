import React from 'react';
/**
 * @param {String} id
 * @param {String} message
 * @param {String} styleClass
 */
const notificationCard = (id, message, styleClass) => (
  <div className={styleClass} id={id}>
    <button type="button" className="close" aria-label="Close" onClick={() => closeThisCard(id)}>
      <span aria-hidden="true">&times;</span>
    </button>
    <span id={id+"Message"}>
      {message}
    </span>
  </div>
)

function closeThisCard(id) {
  document.getElementById(id).style.display = "none";
}
export default notificationCard;