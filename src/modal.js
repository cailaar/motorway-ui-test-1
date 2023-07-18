import React from "react";

const Modal = ({ user, onClose }) => {
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>{user.name}</h2>
        {user.location && (
          <p>
            <span role="img" aria-label="Location Pin">
              📍
            </span>
            {user.location}
          </p>
        )}
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Modal;
