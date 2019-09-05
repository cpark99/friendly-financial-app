import React from "react";
import { NavLink } from "react-router-dom";
import "./ForQuestions.css";

export default function ForQuestions() {
  return (
    <div className="for-questions-text">
      <p>
        Any questions or concerns? Contact a{" "}
        <NavLink to="/about">professional</NavLink>.
      </p>
    </div>
  );
}
