import React from "react";
import "./Tooltip.css";

export default function Tooltip(props) {
  return (
    <span className="Tooltip">
      <span className="Tooltip-content">{props.children}</span>
      <span className="Tooltip-message">{props.message}</span>
    </span>
  );
}
