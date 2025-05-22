import React from "react";
import '../../styles/inputs.css';
import { speakIfTabbing } from "../../utils/speech";

function InputText({ id, placeholder, value, onChange,type, disabled }) {
  return ( <input id={id} 
    placeholder={placeholder} 
    className={"inputText"} 
    onChange={onChange} 
    disabled={disabled} 
    value={value} 
    type={type}  
    onFocus={() => {
        if (id === 'correo') speakIfTabbing('Introduce email');
        if (id === 'usuario') speakIfTabbing('Introduce usuario');
        if (id === 'contrasenia') speakIfTabbing('Introduce contraseña');
        if (id === 'contrasenia2') speakIfTabbing('Repite contraseña');
    }}
    />
  );
}

export default InputText;   