import React from "react";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import Header from "../Header/Header";
import SignUp from "../SignUp/SignUp";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import Headshot from "../Utils/Headshot";
import phone from "../img/phone.png";
import "./Main.css";

export default function Main(props) {
  return (
    <main role="main">
      <ScrollToTopOnMount />
      <div id="introduction-container" className="flex-column-center">
        <Header />
        <div
          id="main-flex-container"
          className="flex-responsive-mobile-desktop"
        >
          <div className="flex-column-center">
            <Headshot />
            <div id="introduction-business-info">
              <h5><a href="tel:+1-818-731-8616" id="phone-link-main" className="flex-center-center"><img src={phone} className="phone-icon" alt="black telephone icon" />(818) 731-8616</a></h5>
              <h5>Hours: 9:00 AM - 5:00 PM (PST)</h5>
            </div>
          </div>
          <div
            id="introduction-text-container"
            className="flex-object-vertical-horizontal"
          >
            <h3 id="introduction-text">Your financial friend.</h3>
            <div id="homepage-buttons-container">
              <NavLink to="/schedule">
                <button
                  id="to-schedule-consultation-button"
                  className="homepage-button blue-button"
                >
                  Free Consultation
                </button>
              </NavLink>
              <NavLink to="/financial-tools">
                <button
                  id="to-financial-tools-button"
                  className="homepage-button"
                >
                  Financial Tools
                </button>
              </NavLink>
              <NavLink to="/educational-resources">
                <button
                  id="to-educational-resources-button"
                  className="homepage-button"
                >
                  Educational Resources
                </button>
              </NavLink>
            </div>
              
            <div className="text-container">
              <p>
                As your New York Life agent, I can work with you to identify your
                goals, understand your needs, and offer insurance and financial
                products that can help you achieve peace of mind. Check out my{' '}
                <NavLink to="/about">about</NavLink> page.
              </p>
            </div>
            <div id="signup-contact-buttons-container" className="flex-center">
                {!TokenService.hasAuthToken() && <a href="#sign-up-section">
                  <button id="to-sign-up-form-button" className="small-button">Sign up</button>
                </a>}
                <NavLink to="/contact">
                  <button
                    id="to-contact-button" 
                    className="small-button"
                  >
                    Contact
                  </button>
                </NavLink>
              </div>
          </div>
        </div>
      </div>
      {TokenService.hasAuthToken() ? <></> : <SignUp history={props.history} />}
    </main>
  );
}
