import React from 'react';

const Modal = ({ isOpen, toggleModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={toggleModal}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
