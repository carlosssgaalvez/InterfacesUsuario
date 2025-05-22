import React, { useState } from 'react';

function Slider({ id, min, max, value, onChange }) {
  return (
    <div className="slider-container">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}  // Cuando el usuario mueve el slider, actualiza el valor
        className="slider"
      />
      <label htmlFor={id} >{value}</label> {/* Mostrar el valor actual del slider */}
    </div>
  );
}

export default Slider;
