import React from 'react'
import './Main.css'
import Header from '../Header/Header';
import FinancialTools from '../FinancialTools/FinancialTools';
import EducationalResources from '../EducationalResources/EducationalResources';
import AboutProfessional from '../AboutProfessional/AboutProfessional';
import ScheduleCall from '../ScheduleCall/ScheduleCall';
import SignUp from '../SignUp/SignUp';

export default function Main() {
  return (
    <main role="main">
      <div id="introduction-container">
        <Header />
        <h3>Be prepared for life.</h3>
        <button id="to-sign-up-form-button">Sign up for FREE</button>
      </div>
      <FinancialTools />
      <EducationalResources />
      <AboutProfessional />
      <ScheduleCall />
      <SignUp />
    </main>
  )
}