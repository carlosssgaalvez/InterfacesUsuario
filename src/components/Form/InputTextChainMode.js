import React, { forwardRef } from "react";
import '../../styles/inputs.css';

const InputTextChainMode = forwardRef(({ id, placeholder, value, onKeyDown, onChange, type, disabled }, ref) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      className={"inputText"}
      onChange={onChange}
      disabled={disabled}
      onKeyDown={onKeyDown}
      value={value}
      type={type}
      ref={ref}
    />
  );
});

export default InputTextChainMode;
