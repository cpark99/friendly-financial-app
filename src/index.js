import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import  { BreakpointProvider } from 'react-socks';
import App from "./App/App";
// import ProfileProvider from './FriendlyFinancialContext';
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <BreakpointProvider>
      {/* <ProfileProvider> */}
        <App />
      {/* </ProfileProvider> */}
    </BreakpointProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
