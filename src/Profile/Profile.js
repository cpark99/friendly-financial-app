import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import ProfileContext, { nullProfile } from '../FriendlyFinancialContext';
import ProfileApiService from '../services/profile-api-service';
import './Profile.css';

export default class Profile extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ProfileContext

  componentDidMount() {
    const { profileId } = this.props.match.params
    this.context.clearError()
    ProfileApiService.getProfile(profileId)
      .then(this.context.setProfile)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearProfile()
  }

  render() {
    const { error, profile = nullProfile } = this.context
    let content
    if (error) {
      content = (error.error === `Profile doesn't exist`)
        ? <p className='red-font'>Profile not found</p>
        : <p className='red-font'>There was an error</p>
    }
    return (
      <div id="profile-page-container">
        <ScrollToTopOnMount />
        {content}
        <section id="basic-profile-container" className="profile-section">
          <h2>Profile</h2>
          <div className="profile-content-container">
            <div id="profile-name-container" className="profile-info-container">
              <h5>Name:</h5>
              <p>{profile.name || 'NA'}</p>
            </div>
            <div id="profile-email-container" className="profile-info-container">
              <h5>Email:</h5>
              <p>{profile.email || 'NA'}</p>
            </div>
            <div id="profile-phone-container" className="profile-info-container">
              <h5>Phone:</h5>
              <p id="profile-phone-number">{profile.phone || 'NA'}</p>
            </div>
          </div>
        </section>
        <section className="profile-section">
          <h3 className="profile-section-header">Financial Goals</h3>
          <div className="profile-content-container">
            <div id="profile-life-insurance-container" className="profile-info-container">
              <h5>Life Insurance Coverage:</h5>
              <p>{profile.life_insurance_goal || 'NA'}</p>
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
              <p>{profile.get_email === true ? 'Yes' : 'No'}</p>
            </div>
            <div id="profile-phone-preference-container" className="profile-info-container">
              <h5>Call:</h5>
              <p>{profile.get_call === true ? 'Yes' : 'No'}</p>
            </div>
            <div id="profile-newsletter-preference-container" className="profile-info-container">
              <h5>Newsletter:</h5>
              <p>{profile.get_newsletter === true ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
