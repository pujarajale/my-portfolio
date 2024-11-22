// Button.js
import React from 'react';
import './Button.css'; // Import the CSS file for styles

const Button = ({ text, onClick, className = '', style = {} }) => {
  return (
    <button
      className={`btn ${className}`} // Default class 'btn' with optional custom classes
      onClick={onClick}
      style={style} // Apply additional inline styles if any
    >
      {text}
    </button>
  );
};

export default Button;
