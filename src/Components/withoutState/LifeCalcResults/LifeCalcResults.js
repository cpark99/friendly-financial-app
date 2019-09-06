import React from "react";
import "./LifeCalcResults.css";

export default function Results(props) {
  return (
    <div className="life-insurance-calc-results">
      <h4 className="life-result-description">
        Life insurance need for{" "}
        <span className="blue-font">{props.name.value}</span>:
      </h4>
      <h3 className="life-result-number">
        <span className="red-font">${props.data}</span>
      </h3>
    </div>
  );
}
