import React from 'react'
import './EducationalResources.css'

export default function EducationalResources() {
  return (
    <section id="educational-resources-section">
      <h2>Educational Resources</h2>
      <div id="educational-resources-intro-text" className="text-container">
        <p>Check out these <span className="italics">free</span> financial resources!</p>
      </div>
      <div id="educational-resources-container" className="left-align-container">
        <h3>Documents:</h3>
        <ul id="list-of-educational-resources">
          <li><a href="">List</a></li>
          <li><a href="">of</a></li>
          <li><a href="">Documents</a></li>
        </ul>
        <h3>Helpful links:</h3>
        <ul id="list-of-educational-links">
          <li><a href="">List</a></li>
          <li><a href="">of</a></li>
          <li><a href="">Links</a></li>
        </ul>
      </div>
    </section>
  )
}