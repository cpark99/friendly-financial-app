import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNavMenu: false
    };
  }
  

  handleClick = e => {
    this.setState({
      showNavMenu: true
    })
    if (this.state.showNavMenu === true) {
      this.setState({
        showNavMenu: false
      })
    }
  }

  render() {
    return (
      <div id="nav-container">
        <nav role="navigation">
          <div id="nav-bar-container">
            <div id="hamburger" class="nav-item" onClick={() => {this.handleClick();}}>&#9776;</div>
            <a href="#root" id="nav-logo" class="nav-item">FF</a>
            <a href="" id="nav-login-button" class="nav-item">login</a>
          </div>
        </nav>
        <div id="nav-dropdown-menu-container">
          <div id="nav-dropdown-menu" className={this.state.showNavMenu ? "show" : "hidden"}>
            <ul id="nav-dropdown-menu-list">
              <a href="#root" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Home</li></a>
              <a href="#root" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Profile</li></a>
              <a href="#financial-tools-section" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Financial Tools</li></a>
              <a href="#educational-resources-section" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Educational Resources</li></a>
              <a href="#about-financial-services-professional" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">About Professional</li></a>
              <a href="#schedule-call-section" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Schedule Call</li></a>
              <a href="#sign-up-section" class="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Sign Up</li></a>
              {/* <li className="nav-dropdown-menu-list-item">Logout</li> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}