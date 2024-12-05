import React, { useState } from "react";
import "./index.css";
import fiftyGEP from "../../imgs/50qep-transformed.webp";
import oneGEP from "../../imgs/1qep-transformed.webp";
import winIMG from "../../imgs/win.jpg";
import lostIMG from "../../imgs/lost.webp";

function CoinFlip() {
  const [flipping, setFlipping] = useState(false);
  const [flipResult, setFlipResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleFlip = () => {
    setFlipping(true);
    setShowResult(false);

    setTimeout(() => {
      setFlipping(false);
      const result = Math.random() < 0.5 ? "fifty" : "one";
      setFlipResult(result);
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }, 1000);
  };

  return (
    <div className="coin_flip_section">
      <div
        className={`coin ${flipping ? "flipping" : ""}`}
        onClick={handleFlip}
      >
        <img
          src={flipResult === "fifty" || !flipResult ? fiftyGEP : oneGEP}
          className="fifty_gep"
          alt="50 GEP"
        />
        <img
          src={flipResult === "one" ? oneGEP : fiftyGEP}
          className="one_gep"
          alt="1 GEP"
        />
      </div>
      <button onClick={handleFlip} disabled={flipping}>
        {flipping ? "Flipping..." : "Flip Coin"}
      </button>

      {showResult && (
        <img
          id="result_img"
          src={flipResult === "fifty" ? winIMG : lostIMG}
          alt=""
        />
      )}
    </div>
  );
}

export default CoinFlip;
