import React from 'react';
import './button.css';

const button = ({type,title,disable}) => {
  return (
    <button 
    className ={`btn ${
      (type === "add" && "add") ||
      (type === "remove" && "remove") ||
      (type === "checkout" && "checkout")
    }`}
    disabled = {disable}
    onClick = {() => console.log("button clicked")}
    >
    {title}
  </button>
  );
};

export default button;