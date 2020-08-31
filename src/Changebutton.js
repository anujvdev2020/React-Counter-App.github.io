import React from "react";
import "./styles.css";

export default function Changebutton(props) {
  return (
    <div className="Button">
      <button onClick={() => props.handleClick("-")} id="btn-1">
        -
      </button>
      <button onClick={() => props.handleClick("+")} id="btn-2">
        +
      </button>
    </div>
  );
}
