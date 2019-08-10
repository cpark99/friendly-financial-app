import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css'

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      showNavMenu: false
    };
  }

  // handleHomePathCheck = () => {
  //   if (this.props.location.pathname === "/") {
  //     return "#root"
  //   } else {
  //     return "/"
  //   }
  // }

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

  checkIfHomePath = (target, label) => {
    if (this.props.location.pathname === "/") {
      return <a href={target} className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">{label}</li></a>
    } else {
      return <NavLink className="nav-menu-item-link" to={"/"}><li className="nav-dropdown-menu-list-item">{label}</li></NavLink>
    }
  }

  render() {
    return (
      <div id="nav-container">
        <nav role="navigation">
          <div id="nav-bar-container">
            <div id="hamburger" className="nav-item" onClick={() => {this.handleClick();}}>&#9776;</div>
            {this.props.location.pathname === "/" ? <a href="#root" id="nav-logo" className="nav-item">FF</a> : <NavLink id="nav-logo" className="nav-item" to={"/"}>FF</NavLink>}
            <NavLink id="nav-login-button" className="nav-item" to={"/login"}>
              Login
            </NavLink>
          </div>
        </nav>
        <div id="nav-dropdown-menu-container">
          <div id="nav-dropdown-menu" className={this.state.showNavMenu ? "show" : "hidden"}>
            <ul id="nav-dropdown-menu-list">
              {this.checkIfHomePath("#root", "Home")}
              <a href="/#root" className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Profile</li></a>
              {this.checkIfHomePath("#financial-tools-section", "Financial Tools")}
              {/* <a href="/#financial-tools-section" className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Financial Tools</li></a> */}
              <a href="/#educational-resources-section" className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Educational Resources</li></a>
              <a href="/#about-financial-services-professional" className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">About Professional</li></a>
              <a href="/#schedule-call-section" className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Schedule Call</li></a>
              <a href="/#sign-up-section" className="nav-menu-item-link"><li className="nav-dropdown-menu-list-item">Sign Up</li></a>
              {/* <li className="nav-dropdown-menu-list-item">Logout</li> */}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}