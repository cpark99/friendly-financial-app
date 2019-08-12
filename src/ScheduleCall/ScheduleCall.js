import React, { Component } from 'react'
import './ScheduleCall.css'

export default class ScheduleCall extends Component {
  render() {
    return (
      <section id="schedule-call-section">
        <h2>Schedule a Consultation</h2>
        <div id="schedule-call-text" className="text-container">
          <p>Talk to a certified financial services professional for FREE!</p>
        </div>
        <div className="schedule-call-calendar-container calendar-container">
          <div className="calendly-inline-widget" data-url="https://calendly.com/cpwebdeveloper99/30min" id="schedule-call-calendar-widget"></div>
        </div>
      </section>
    )
  }
}