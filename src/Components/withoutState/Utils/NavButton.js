import React from "react";
import { NavLink } from "react-router-dom";

export default function NavButton(props) {
  return (
    <NavLink to={props.destination}>
      <button className={props.class}>{props.text}</button>
    </NavLink>
  );
}
