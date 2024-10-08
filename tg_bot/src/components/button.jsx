import React from 'react';
import './button.css';

const Button = ({ type, title, disable }) => {
  return (
    <button 
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
      disabled={disable}
      onClick={() => console.log('Button clicked')}
    >
      {title}
    </button>
  );
};

export default Button;