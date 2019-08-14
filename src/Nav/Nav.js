import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import TokenService from "../services/token-service";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavMenu: false
    };
  }

  handleClick = e => {
    this.setState({
      showNavMenu: true
    });
    if (this.state.showNavMenu === true) {
      this.setState({
        showNavMenu: false
      });
    }
  };

  closeNavMenu = () => {
    this.setState({
      showNavMenu: false
    });
  }

  checkIfHomePath = (target, label) => {
    if (this.props.location.pathname === "/") {
      return (
        <a href={target} className="nav-menu-item-link" onClick={e => {this.closeNavMenu()}}>
          <li className="nav-dropdown-menu-list-item">{label}</li>
        </a>
      );
    } else {
      // if (target === "#root") {
      //   return (
      //     <NavLink className="nav-menu-item-link" to={"/"}>
      //       <li className="nav-dropdown-menu-list-item">{label}</li>
      //     </NavLink>
      //   );
      // } else {
        return (
          <a href={`/${target}`} className="nav-menu-item-link">
            <li className="nav-dropdown-menu-list-item">{label}</li>
          </a>
        );
      // }
    }
  };

  render() {
    return (
      <div id="nav-container">
        <nav role="navigation">
          <div id="nav-bar-container">
            <div
              id="hamburger"
              className="nav-item"
              onClick={() => {
                this.handleClick();
              }}
            >
              &#9776;
            </div>
            {this.props.location.pathname === "/" ? (
              <a href="#root" id="nav-logo" className="nav-item">
                FF
              </a>
            ) : (
              // <NavLink id="nav-logo" className="nav-item" to={"/"}  onClick={e => {this.closeNavMenu()}}>
              //   FF
              // </NavLink>
              <a href={"/"} id="nav-logo" className="nav-item">FF</a>
            )}
            {TokenService.hasAuthToken()
          ? <NavLink id="nav-login-button" className="nav-item" to={"/login"}  onClick={e => {this.closeNavMenu()}}>
              Logout
            </NavLink>
          : <NavLink id="nav-login-button" className="nav-item" to={"/login"}  onClick={e => {this.closeNavMenu()}}>
              Login
            </NavLink>}
            
          </div>
        </nav>
        <div id="nav-dropdown-menu-container">
          <div
            id="nav-dropdown-menu"
            className={this.state.showNavMenu ? "show" : "hidden"}
          >
            <ul id="nav-dropdown-menu-list">
              {this.checkIfHomePath("#root", "Home")}
              <a href="/profile" className="nav-menu-item-link">
                <li className="nav-dropdown-menu-list-item">Profile</li>
              </a>
              {/* <NavLink className="nav-menu-item-link" to={"/profile"}>
                <li className="nav-dropdown-menu-list-item">Profile</li>
              </NavLink> */}
              {this.checkIfHomePath(
                "#financial-tools-section",
                "Financial Tools"
              )}
              {/* <NavLink className="nav-menu-item-link" to={{pathname: "/", hash: "#educational-resources-section"}}  onClick={e => {this.closeNavMenu()}}>
                <li className="nav-dropdown-menu-list-item">Educational Resources</li>
              </NavLink> */}
              {this.checkIfHomePath(
                "#educational-resources-section",
                "Educational Resources"
              )}
              {this.checkIfHomePath(
                "#about-financial-services-professional",
                "About Professional"
              )}
              {this.checkIfHomePath("#schedule-call-section", "Schedule Call")}
              {this.checkIfHomePath("#sign-up-section", "Sign Up")}
              {/* <li className="nav-dropdown-menu-list-item">Logout</li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
