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
        <div id="schedule-call-container">
            <a href="https://calendly.com/cpwebdeveloper99/phone-call">
              <button id="schedule-call-button" className="schedule-consultation-button">Schedule Phone Call</button>
            </a>
          </div>
          <div id="schedule-meeting-container">
            <a href="https://calendly.com/cpwebdeveloper99/30min">
              <button id="schedule-call-button" className="schedule-consultation-button">Schedule Meeting</button>
            </a>
          </div>
      </div>
    )
  }
}