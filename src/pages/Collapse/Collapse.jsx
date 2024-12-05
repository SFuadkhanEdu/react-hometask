import React from "react";
import { useState } from "react";
import "./index.css";
function Collapse() {
  const [active, setActive] = useState("");
  return (
    <div className="collapse_container">
      <div
        className={
          active === 1
            ? "collapse_header active_collapse_after"
            : "collapse_header"
        }
        onClick={() => {
          setActive((active) => {
            if (active === 1) return 0;
            return 1;
          });
        }}
      >
        secret1
      </div>
      <p className={active === 1 ? "active_collapse" : ""}>
        How to hack the FBI: Step 1 - Sit at the computer. Step 2 - Turn it on.
        Step 3 - Watch some cat videos instead
      </p>
      <div
        className={
          active === 2
            ? "collapse_header active_collapse_after"
            : "collapse_header"
        }
        onClick={() => {
          setActive((active) => {
            if (active === 2) return 0;
            return 2;
          });
        }}
      >
        secret2
      </div>
      <p
        className={active === 2 ? "active_collapse active_collapse_after" : ""}
      >
        Hackathon? More like snackathon with occasional coding.
      </p>
      <div
        className={
          active === 3
            ? "collapse_header active_collapse_after"
            : "collapse_header"
        }
        onClick={() => {
          setActive((active) => {
            if (active === 3) return 0;
            return 3;
          });
        }}
      >
        secret3
      </div>
      <p
        className={active === 3 ? "active_collapse active_collapse_after" : ""}
      >
        My code doesn’t have bugs; it just develops unexpected features. My code
        doesn’t have bugs; it just develops unexpected features. My code doesn’t
        have bugs; it just develops unexpected features.
      </p>
    </div>
  );
}

export default Collapse;
