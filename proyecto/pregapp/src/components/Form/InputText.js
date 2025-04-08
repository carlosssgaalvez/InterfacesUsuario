import React from "react";
import '../../styles/inputs.css';
function InputText({ id, placeholder, value, onChange,type }) {
  return ( <input id={id} placeholder={placeholder} className={"inputText"} onChange={onChange} value={value} type={type}  />
  );
}

export default InputText;