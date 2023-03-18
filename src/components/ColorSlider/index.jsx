import React from 'react';
import './style.css';

const ColorSlider = ({ baseColor, colorName, onValueChange, value }) => {
  return (
    <>
    	<label htmlFor={baseColor}>{colorName}</label>
			<input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  )
}

export default ColorSlider;