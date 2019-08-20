import React, { Component } from 'react'
import './ScheduleConsultationButtons.css'

export default class ScheduleConsultationButtons extends Component {
  checkIfSchedulePath = () => {
    if (this.props.location) {
      if (this.props.location.pathname === "/schedule") {
        return "schedule-page-only"
      }
    } else {
      return ""
    }
  }

  render() {
    return (
      <div id="schedule-consultations-container" className={this.checkIfSchedulePath()}>
        <p id="schedule-info">Set a meeting or phone call with:</p>
        <h5>Nicholas S. Park, MBA</h5>
        <div id="schedule-buttons-container" className="flex-responsive-mobile-desktop">
          <div id="schedule-call-container" className="schedule-button-container text-container">
            <p>Schedule a FREE:</p>
            <h5>PHONE INTRODUCTION</h5>
            <p>Get to know a certified financial advisor, and start planning. Get prepared for life!</p>
            <a href="https://calendly.com/nparknyl/phone" target="_blank" rel="noopener noreferrer">
              <button id="schedule-call-button" className="schedule-consultation-button gray-button">Click to Schedule</button>
            </a>
          </div>
          <div id="schedule-meeting-container" className="schedule-button-container text-container">
            <p>Schedule a FREE:</p>
            <h5>1-ON-1 MEETING</h5>
            <p>Get started on your own personalized plan, designed to reach all your financial goals!</p>
            <a href="https://calendly.com/nparknyl/1on1" target="_blank" rel="noopener noreferrer">
              <button id="schedule-meeting-button" className="schedule-consultation-button gray-button">Click to Schedule</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}