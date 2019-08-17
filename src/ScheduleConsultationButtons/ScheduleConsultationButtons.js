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
          <div id="schedule-call-container" className="schedule-button-container">
            <p>Schedule a FREE:</p>
            <h5>Phone Introduction</h5>
            <p>Get to know a certified financial advisor, and start planning.</p>
            <a href="https://calendly.com/nparknyl/phone">
              <button id="schedule-call-button" className="schedule-consultation-button">Click to Schedule</button>
            </a>
          </div>
          <div id="schedule-meeting-container" className="schedule-button-container">
            <p>Schedule a FREE:</p>
            <h5>1-on-1 Meeting</h5>
            <p>Get started on your own personalized plan, designed to reach all your financial goals.</p>
            <a href="https://calendly.com/nparknyl/1on1">
              <button id="schedule-meeting-button" className="schedule-consultation-button">Click to Schedule</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}