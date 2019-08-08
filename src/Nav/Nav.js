import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav role="navigation">
      <div id="nav-container">
        <div id="hamburger" class="nav-item">&#9776;</div>
        <h5 id="nav-logo" class="nav-item">FF</h5>
        <a href="" id="nav-login-button">login</a>
      </div>
    </nav>
  )
}