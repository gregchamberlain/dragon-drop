import React from 'react';

const Modal = ({ title, children }) => (
  <div className="modal-overlay">
    <div className="modal-container">
      <div className="modal-header">
        {title}
      </div>
      <div className="modal-content">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
