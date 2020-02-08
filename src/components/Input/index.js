import React from "react";

function Input({ type, placeholder, onClick, onChange }) {
  return (
    <input 
      type={type}
      onClick={onClick} 
      onChange={onChange}
      placeholder={placeholder}
      className="inputForm__input"
    />
  );
}

export default Input;