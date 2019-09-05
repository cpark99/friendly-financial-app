import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import NavButton from "./NavButton";

it("renders without crashing", () => {
  const props = {
    destination: "destination",
    title: "title"
  }
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NavButton {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
