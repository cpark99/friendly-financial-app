import React, { Component } from 'react'
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import ScheduleConsultationButtons from '../ScheduleConsultationButtons/ScheduleConsultationButtons';
import './ScheduleConsultation.css'

export default class ScheduleConsultation extends Component {
  render() {
    return (
      <section id="schedule-call-section" className="flex-column-center">
        <ScrollToTopOnMount />
        <h2>Schedule a Consultation</h2>
        <div id="schedule-call-text" className="text-container">
          <p>Talk to a certified financial services professional for FREE!</p>
        </div>
        <ScheduleConsultationButtons location={this.props.location}/>
      </section>
    )
  }
}