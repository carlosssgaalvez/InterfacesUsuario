import React, { useState } from 'react';
import { speakIfTabbing } from '../../utils/speech';  

function Slider({ id, min, max, value, onChange }) {
  const handleChange = (e) => {
    // Forzamos a valores enteros, sino había problemas con los decimales
    let newValue = Math.round(Number(e.target.value));
    newValue = Math.max(min, Math.min(max, newValue));

    onChange(newValue);
    speakIfTabbing(`Volumen ${newValue} por ciento`);
  };

  const handleFocus = () => {
    speakIfTabbing(`Volumen ${Math.round(value)} por ciento`);
  };

  return (
    <div className="slider-container">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={handleChange}  // Cuando el usuario mueve el slider, actualiza el valor
        onFocus={handleFocus}
        className="slider"
      />
      <label htmlFor={id}>{Math.round(value)}</label>
    </div>
  );
}

export default Slider;
