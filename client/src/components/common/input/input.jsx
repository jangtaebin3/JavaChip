import React from "react";
import './input.css';

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      disabled={disabled}
      className={className}
      {...props}
    />
  );
};

export default Input;