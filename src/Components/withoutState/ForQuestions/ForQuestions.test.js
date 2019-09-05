import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import ForQuestions from "./ForQuestions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ForQuestions />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
