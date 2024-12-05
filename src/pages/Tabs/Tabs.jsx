import React, { useState } from "react";
import "./index.css";
function Tabs() {
  const [active, setActive] = useState(1);
  return (
    <div className="section tabs_container">
      <menu>
        <button
          className={active === 1 ? "active_tab_btn" : ""}
          onClick={() => setActive(1)}
        >
          secret1
        </button>
        <button
          className={active === 2 ? "active_tab_btn" : ""}
          onClick={() => setActive(2)}
        >
          secret2
        </button>
        <button
          className={active === 3 ? "active_tab_btn" : ""}
          onClick={() => setActive(3)}
        >
          secret3
        </button>
      </menu>
      <div className="content_container">
        <p className={active === 1 ? "active_tab_p" : ""}>
          Programmer's life: When you fix one bug, and two more appear. It’s
          like Hydra, but with code.
        </p>
        <p className={active === 2 ? "active_tab_p" : ""}>
          What’s the object-oriented way to become wealthy? Inheritance.
        </p>
        <p className={active === 3 ? "active_tab_p" : ""}>
          <pre>Knock knock.</pre>
          <pre> Who’s there? </pre>
          <pre>Recursion. </pre>
          <pre>Recursion who? </pre>
          <pre>Knock knock.</pre>
        </p>
      </div>
    </div>
  );
}

export default Tabs;
