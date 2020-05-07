import React from "react";
import PropTypes from 'prop-types';

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
      data-test="modalComponent"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" data-test="modalTitle">
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
          <div className="modal-body" data-test="modalContent">{modalContent}</div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalId: PropTypes.string.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalContent: PropTypes.element.isRequired
};

export default Modal;