import React from "react";

const Input = ({ type, label, className, onChange }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input className={className} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;
