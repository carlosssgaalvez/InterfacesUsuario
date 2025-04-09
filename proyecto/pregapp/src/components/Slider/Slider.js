import React, { useState } from 'react';

function Slider({ label, min, max, value, onChange }) {
  return (
    <div className="slider-container">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}  // Cuando el usuario mueve el slider, actualiza el valor
        className="slider"
      />
      <span>{value}</span> {/* Mostrar el valor actual del slider */}
    </div>
  );
}

export default Slider;
