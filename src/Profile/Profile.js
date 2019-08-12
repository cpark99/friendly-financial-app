import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import './Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div id="profile-page-container">
        <ScrollToTopOnMount />
        <section id="basic-profile-container" className="profile-section">
          <h2>Profile</h2>
          <div className="profile-content-container">
            <div id="profile-name-container" className="profile-info-container">
              <h5>Name:</h5>
              <p>Chris Park</p>
            </div>
            <div id="profile-email-container" className="profile-info-container">
              <h5>Email:</h5>
              <p>cpwebdeveloper99@gmail.com</p>
            </div>
            <div id="profile-phone-container" className="profile-info-container">
              <h5>Phone:</h5>
              <p id="profile-phone-number">(888)888-8888</p>
            </div>
          </div>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Financial Goals</h3>
          <div className="profile-content-container">
            <div id="profile-life-insurance-container" className="profile-info-container">
              <h5>Life Insurance Coverage:</h5>
              <p>$500,000</p>
            </div>
          </div>
          <NavLink to={"/life-insurance-calc"}>
            <button className="life-insurance-calculator-button">Click to Calculate</button>
          </NavLink>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Schedule Appointment</h3>
          <p id="schedule-info">Set a meeting or phone call with:</p>
          <h5>Nicholas S. Park, MBA</h5>
          <div className="schedule-meeting-call-calendar-container calendar-container">
            <div className="calendly-inline-widget" data-url="https://calendly.com/cpwebdeveloper99/30min" id="schedule-call-calendar-widget"></div>
          </div>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Preferences</h3>
          <div id="profile-preferences-content" className="profile-content-container">
            <div id="profile-email-preference-container" className="profile-info-container">
              <h5>Email:</h5>
              <p>Yes</p>
            </div>
            <div id="profile-phone-preference-container" className="profile-info-container">
              <h5>Call:</h5>
              <p>Yes</p>
            </div>
            <div id="profile-newsletter-preference-container" className="profile-info-container">
              <h5>Newsletter:</h5>
              <p>Yes</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
