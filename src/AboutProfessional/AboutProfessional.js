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
          <p><a href="tel:+1-818-731-8616">(818) 731-8616</a></p>
          <p><a href="mailto:nspark@ft.newyorklife.com">nspark@ft.newyorklife.com</a></p>
          <p><a href="https://www.linkedin.com/in/nickparknyl">LinkedIn</a></p>
          <p><a href="https://www.facebook.com/2.NPark">Facebook</a></p>
        </div>
      </div>
    </section>
  )
}