import React, { useState } from "react";

import OBESE from "../../imgs/obese.gif";
import OVER from "../../imgs/run-fat.gif";
import GIGA from "../../imgs/giga.gif";
import STICK from "../../imgs/stickman.gif";

import "./index.css";

function BmiCalculator() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [result, setresult] = useState([]);
  const [resultVideo, setresultVideo] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const BMI = (weight / (((height / 100) * height) / 100)).toFixed(2);
    let message;
    if (BMI >= 40) {
      message = "OBESE, u have ur own gravity";
      setresultVideo(OBESE);
    } else if (BMI >= 25) {
      message = "OVERWEIGHT, change breakfast to a morning run";
      setresultVideo(OVER);
    } else if (BMI >= 18.5) {
      message = "PERFECT, gigachad, sigma, mafia";
      setresultVideo(GIGA);
    } else {
      message = "UNDERWEIGHT, thin as a stick, keep eating even asleep";
      setresultVideo(STICK);
    }
    setresult([BMI, message]);
  }
  return (
    <div className="section bmi_section">
      <form onSubmit={submitHandler}>
        <label htmlFor="weight">Weight(kg's)</label>
        <br />
        <input
          id="weight"
          type="text"
          onChange={(e) => setweight(e.target.value)}
        />
        <br />
        <label htmlFor="height">Height(sm's)</label>
        <br />
        <input
          id="height"
          type="text"
          onChange={(e) => setheight(e.target.value)}
        />
        <br />
        <button type="submit">Get Results</button>
      </form>

      <>
        {result.map((x) => (
          <p>{x}</p>
        ))}
        <img src={resultVideo} />
      </>
    </div>
  );
}

export default BmiCalculator;
