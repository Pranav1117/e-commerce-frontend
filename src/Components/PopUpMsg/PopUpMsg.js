import React from 'react';
import './PopupMessage.css'; // Import your CSS file

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default PopupMessage;
