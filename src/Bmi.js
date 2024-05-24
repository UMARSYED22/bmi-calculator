import React, { useMemo, useState } from "react";
import "./Bmi.css";

export default function Bmi() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }
  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    const bmi = weight / (calculateHeight * calculateHeight);
    return bmi.toFixed(1);
  }, [weight, height]);
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight :{weight}</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        ></input>
        <p className="slider-output">Height : {height}</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="140"
          max="220"
          onChange={onHeightChange}
        ></input>
      </div>
      <div className="output-section">
        <p> your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}
