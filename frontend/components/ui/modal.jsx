import React from 'react';
import Close from 'react-icons/lib/fa/close';

const Modal = ({ title, children, onClose }) => (
  <div className="modal-layout">
    <div className="modal-container">
      <div className="modal-heading">
        {title}
        <Close onClick={onClose} className="modal-close"/>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </div>
    <div className="modal-overlay" onClick={onClose}></div>
  </div>
);

export default Modal;
