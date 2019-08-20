import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import UserContext, { nullUser } from "../FriendlyFinancialContext";
import UserApiService from "../services/user-api-service";
import "./Profile.css";

export default class Profile extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError();
    UserApiService.getUser(this.context.user_id)
      .then(this.context.setUser)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    // this.context.clearUser();
  }

  render() {
    const { error, user = nullUser } = this.context;
    let content;
    if (error) {
      content =
        error.error === `User doesn't exist` ? (
          <p className="red-font">User not found</p>
        ) : (
          <p className="red-font">There was an error</p>
        );
    }
    return (
      <div id="profile-page-container" className="content">
        <ScrollToTopOnMount />
        {content}
        <section id="basic-profile-container" className="profile-section">
          <h2>Profile</h2>
          <div className="profile-content-container">
            <div id="profile-name-container" className="profile-info-container">
              <h5>Name:</h5>
              <p>{user.name || "NA"}</p>
            </div>
            <div
              id="profile-email-container"
              className="profile-info-container"
            >
              <h5>Email:</h5>
              <p>{user.email || "NA"}</p>
            </div>
            <div
              id="profile-phone-container"
              className="profile-info-container"
            >
              <h5>Phone:</h5>
              <p id="profile-phone-number">{user.phone || "NA"}</p>
            </div>
          </div>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Financial Goals</h3>
          <div className="profile-content-container">
            <div
              id="profile-life-insurance-container"
              className="profile-info-container"
            >
              <h5>Life Insurance Coverage:</h5>
              <p>{user.life_insurance_goal || "(unset)"}</p>
            </div>
          </div>
          <NavLink to={"/life-insurance-calc"}>
            <button className="life-insurance-calculator-button profile-button">
              Click to Calculate
            </button>
          </NavLink>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Schedule Appointment</h3>
          <p id="schedule-info">Set a meeting or phone call with:</p>
          <h5>Nicholas S. Park, MBA</h5>
          <NavLink to="/schedule">
            <button
              id="to-schedule-consultation-button-profile"
              className="homepage-button profile-button"
            >
              Click to Schedule
            </button>
          </NavLink>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Preferences</h3>
          <div
            id="profile-preferences-content"
            className="profile-content-container"
          >
            <div
              id="profile-email-preference-container"
              className="profile-info-container"
            >
              <h5>Email:</h5>
              <p>{user.get_email === false ? "No" : "Yes"}</p>
            </div>
            <div
              id="profile-phone-preference-container"
              className="profile-info-container"
            >
              <h5>Call:</h5>
              <p>{user.get_call === false ? "No" : "Yes"}</p>
            </div>
            <div
              id="profile-newsletter-preference-container"
              className="profile-info-container"
            >
              <h5>Newsletter:</h5>
              <p>{user.get_newsletter === false ? "No" : "Yes"}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
