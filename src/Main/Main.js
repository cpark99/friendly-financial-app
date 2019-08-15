import React from "react";
import TokenService from "../services/token-service";
import Header from "../Header/Header";
import FinancialTools from "../FinancialTools/FinancialTools";
import EducationalResources from "../EducationalResources/EducationalResources";
import AboutProfessional from "../AboutProfessional/AboutProfessional";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import SignUp from "../SignUp/SignUp";
import "./Main.css";

export default function Main(props) {
  return (
    <main role="main">
      <div id="introduction-container">
        <Header />
        <h3>Be prepared for life.</h3>
        <a href="#sign-up-section">
          <button id="to-sign-up-form-button">Sign up for FREE</button>
        </a>
      </div>
      <FinancialTools />
      <EducationalResources />
      <AboutProfessional />
      <ScheduleCall />
      {TokenService.hasAuthToken() ? (
        <></>
      ) : (
        <SignUp onSubmit={props.history} />
      )}
    </main>
  );
}
