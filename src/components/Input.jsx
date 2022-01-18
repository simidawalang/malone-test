import React from "react";

const Input = ({ type, label, className, onChange }) => {
  return (
    <div className="input">
      <p>{label}</p>
      <input className={className} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;
