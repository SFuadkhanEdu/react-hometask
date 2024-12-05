import React, { useState } from "react";
import "./index.css";
function Drawer() {
  const [active, setActive] = useState(false);
  return (
    <div className="section drawer_section">
      <button onClick={() => setActive(!active)}>CLICK ME</button>
      <div className={active ? "hidden active" : "hidden"}>
        <ul>
          <li className="close" onClick={() => setActive(!active)}>
            X
          </li>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
          <li>...............</li>
        </ul>
        <img
          src="https://images.bewakoof.com/t540/who-cares-duck-half-sleeve-t-shirt-ltl-265262-1656092282-4.jpg"
          alt=""
        />
        <h1 id="close_arrow">=&gt;</h1>
      </div>
    </div>
  );
}

export default Drawer;
