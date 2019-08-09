import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav role="navigation">
      <div id="nav-container">
        <div id="hamburger" class="nav-item">&#9776;</div>
        <a href="#root" id="nav-logo" class="nav-item">FF</a>
        <a href="" id="nav-login-button" class="nav-item">login</a>
      </div>
      <div id="nav-dropdown-menu-container">
        <div id="nav-dropdown-menu">
          
        </div>
      </div>
    </nav>
  )
}