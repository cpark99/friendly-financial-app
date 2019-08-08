import React from 'react'
import './AboutProfessional.css'

export default function AboutProfessional() {
  return (
    <section id="about-financial-services-professional">
      <h2>Meet Your Certified Professional</h2>
      <img src="" alt="headshot for Nicholas S. Park, MBA, certified financial services professional" />
      <h5>Nicholas S. Park, MBA</h5>
      <div id="about-professional-text" className="text-container">
      < p>(about text)</p>
      </div>
      <div id="about-contact-info-container" className="left-align-container">
        <h4 id="contact-info-title">Contact:</h4>
        <div>
          <p>(818)731-8616</p>
          <p>nspark@ft.newyorklife.com</p>
          <p><a href="https://www.linkedin.com/in/nickparknyl">LinkedIn</a></p>
        </div>
      </div>
    </section>
  )
}