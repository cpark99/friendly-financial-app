import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Breakpoint } from "react-socks";
import TokenService from "../../../services/token-service";
import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavMenu: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
    document.addEventListener('touchstart', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
    document.removeEventListener('touchstart', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    // outside
    this.closeNavMenu();
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.closeNavMenu();
  };

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
  };

  checkIfHomePath = (target, label) => {
    if (this.props.location.pathname === "/") {
      return (
        <a
          href={target}
          className="nav-menu-item-link"
          onClick={e => {
            this.closeNavMenu();
          }}
        >
          <li className="nav-dropdown-menu-list-item">{label}</li>
        </a>
      );
    } else {
      return (
        <a href={`/${target}`} className="nav-menu-item-link">
          <li className="nav-dropdown-menu-list-item">{label}</li>
        </a>
      );
    }
  };

  render() {
    return (
      <div id="nav-container">
        <nav role="navigation">
          <div id="nav-bar-container" ref={node => this.node = node}>
            <Breakpoint tabletLandscape down>
              {TokenService.hasAuthToken() ? (
                <NavLink
                  id="nav-login-button"
                  className="nav-item"
                  to={"/"}
                  onClick={e => {
                    this.handleLogoutClick();
                  }}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  id="nav-login-button"
                  className="nav-item"
                  to={"/login"}
                  onClick={e => {
                    this.closeNavMenu();
                  }}
                >
                  Login
                </NavLink>
              )}
            </Breakpoint>
            {this.props.location.pathname === "/" ? (
              <a
                href="#root"
                id="nav-logo"
                className="nav-item"
                onClick={e => {
                  this.closeNavMenu();
                }}
              >
                Friendly Financial
              </a>
            ) : (
              <NavLink
                id="nav-logo"
                className="nav-item"
                to={"/"}
                onClick={e => {
                  this.closeNavMenu();
                }}
              >
                Friendly Financial
              </NavLink>
            )}
            <Breakpoint tabletLandscape down>
              <div
                id="hamburger"
                className="nav-item"
                onClick={() => {
                  this.handleClick();
                }}
              >
                &#9776;
              </div>
            </Breakpoint>
            <div id="nav-dropdown-menu-container">
              <div
                id="nav-dropdown-menu"
                className={this.state.showNavMenu ? "show" : "hidden"}
              >
                <ul id="nav-dropdown-menu-list">
                  <Breakpoint tabletLandscape down>
                    {this.props.location.pathname === "/" ? (
                      <a
                        href="#root"
                        className="nav-menu-item-link"
                        onClick={e => {
                          this.closeNavMenu();
                        }}
                      >
                        <li className="nav-dropdown-menu-list-item">Home</li>
                      </a>
                    ) : (
                      <NavLink
                        className="nav-menu-item-link"
                        to={"/"}
                        onClick={e => {
                          this.closeNavMenu();
                        }}
                      >
                        <li className="nav-dropdown-menu-list-item">Home</li>
                      </NavLink>
                    )}
                  </Breakpoint>

                  <NavLink
                    className="nav-menu-item-link"
                    to={"/about"}
                    onClick={e => {
                      this.closeNavMenu();
                    }}
                  >
                    <li className="nav-dropdown-menu-list-item">About</li>
                  </NavLink>
                  <NavLink
                    className="nav-menu-item-link"
                    to={"/schedule"}
                    onClick={e => {
                      this.closeNavMenu();
                    }}
                  >
                    <li className="nav-dropdown-menu-list-item">
                      Schedule Consultation
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav-menu-item-link"
                    to={"/financial-tools"}
                    onClick={e => {
                      this.closeNavMenu();
                    }}
                  >
                    <li className="nav-dropdown-menu-list-item">
                      Financial Tools
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav-menu-item-link"
                    to={"/educational-resources"}
                    onClick={e => {
                      this.closeNavMenu();
                    }}
                  >
                    <li className="nav-dropdown-menu-list-item">
                      Educational Resources
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav-menu-item-link"
                    to={"/contact"}
                    onClick={e => {
                      this.closeNavMenu();
                    }}
                  >
                    <li className="nav-dropdown-menu-list-item">Contact</li>
                  </NavLink>
                  {TokenService.hasAuthToken() && (
                    <NavLink
                      className="nav-menu-item-link"
                      to={"/profile"}
                      onClick={e => {
                        this.closeNavMenu();
                      }}
                    >
                      <li className="nav-dropdown-menu-list-item">Profile</li>
                    </NavLink>
                  )}
                  {!TokenService.hasAuthToken() && (
                    <NavLink
                      className="nav-menu-item-link"
                      to={"/signup"}
                      onClick={e => {
                        this.closeNavMenu();
                      }}
                    >
                      <li className="nav-dropdown-menu-list-item">Sign Up</li>
                    </NavLink>
                  )}
                  <Breakpoint xlarge up>
                    {TokenService.hasAuthToken() ? (
                      <NavLink
                        className="nav-menu-item-link"
                        to={"/"}
                        onClick={e => {
                          this.handleLogoutClick();
                        }}
                      >
                        <li className="nav-dropdown-menu-list-item">Logout</li>
                      </NavLink>
                    ) : (
                      <NavLink
                        className="nav-menu-item-link"
                        to={"/login"}
                        onClick={e => {
                          this.closeNavMenu();
                        }}
                      >
                        <li className="nav-dropdown-menu-list-item">Login</li>
                      </NavLink>
                    )}
                  </Breakpoint>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
