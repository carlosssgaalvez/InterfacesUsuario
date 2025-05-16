import React from "react";
import '../../styles/inputs.css';
function InputText({ id, placeholder, value, onChange,type, disabled }) {
  return ( <input id={id} placeholder={placeholder} className={"inputText"} onChange={onChange} disabled={disabled} value={value} type={type}  />
  );
}

export default InputText;