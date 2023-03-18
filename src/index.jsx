import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './components/ColorSlider';

const App = () => {

  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const mixColor = {
    backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`
  }

  return (
	<div className="color-panel">
		<h1>Mixér barev</h1>
		<div className="sliders">

      <ColorSlider baseColor="red" colorName="Červená" onValueChange={setRedValue} value={redValue}/>
      <ColorSlider baseColor="green" colorName="Zelená" onValueChange={setGreenValue} value={greenValue} />
      <ColorSlider baseColor="blue" colorName="Modrá" onValueChange={setBlueValue} value={blueValue} />

		</div>
		<div className="color-box" id="color-box" style={mixColor}></div>
	</div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
