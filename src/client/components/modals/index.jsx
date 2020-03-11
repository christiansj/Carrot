import React from "react";

const Modal = (props = {}) => {
  const {modalId, modalTitle, modalContent} = props;
  return(
    <div
      className="modal show"
      id={modalId}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={modalId}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={modalId}>
              {modalTitle}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{modalContent}</div>
          
          
        </div>
      </div>
    </div>
  );
  
}

export default Modal;
