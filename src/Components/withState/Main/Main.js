import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import Header from '../../withoutState/Header/Header';
import SignUp from '../SignUp/SignUp';
import ScrollToTopOnMount from '../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount';
import Headshot from '../../withoutState/Utils/Headshot';
import phone from '../../../img/phone-navy.png';
import ping from '../../../img/ping.png';
import downArrow from '../../../img/gray-down-arrow.png';
import upArrow from '../../../img/gray-up-arrow.png';
import email from '../../../img/email.png';
import linkedin from '../../../img/linkedin.png';
import facebook from '../../../img/facebook.png';
import map from '../../../img/nyl-location-map.jpeg';
import clock from '../../../img/clock.png';
import license from '../../../img/license.png';
import './Main.css';

export default class Main extends Component {
  state = {
    showDropdown: false
  };

  toggleDropdown = () => {
    if (this.state.showDropdown === false) {
      this.setState({ showDropdown: true });
    } else {
      this.setState({ showDropdown: false });
    }
  };

  render() {
    return (
      <main role="main">
        <ScrollToTopOnMount />
        <div id="introduction-container" className="flex-column-center">
          <Header />
          <div id="main-flex-container" className="flex-responsive-mobile-desktop">
            <div id="main-flex-top-right" className="flex-column-center">
              <Headshot />
              <div id="introduction-business-info" className="flex-column-center">
                <h5>
                  <a href="tel:+1-818-731-8616" id="phone-link-main" className="flex-center-center">
                    <img
                      src={phone}
                      className="phone-icon contact-icon"
                      alt="navy telephone icon"
                    />
                    (818) 731-8616
                  </a>
                </h5>
                <div className="location-address-container">
                  <a
                    href="https://www.google.com/maps/place/New+York+Life/@34.1582344,-118.2578968,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c04d9e3ed059:0x1eec029bfd7eb087!8m2!3d34.15823!4d-118.2557081"
                    className="new-york-life-glendale-address location-address"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>
                      <img
                        src={ping}
                        className="address-ping-icon ping-icon contact-icon"
                        alt="navy location ping icon"
                      />
                      801 North Brand Blvd, Penthouse,
                    </p>
                    <p>Glendale, CA 91203</p>
                  </a>
                </div>
                <div className="dropdown-arrow-container" onClick={this.toggleDropdown}>
                  <p className="dropdown-arrow-text">
                    <span className="italic">
                      {this.state.showDropdown ? 'Hide' : 'View'} details and hours
                    </span>
                  </p>
                  {this.state.showDropdown ? (
                    <img src={upArrow} className="up-arrow dropdown-arrow" alt="gray up arrow" />
                  ) : (
                    <img
                      src={downArrow}
                      className="down-arrow dropdown-arrow"
                      alt="gray down arrow"
                    />
                  )}
                </div>
                {this.state.showDropdown && (
                  <div id="details-hours-dropdown-content" className="dropdown-content">
                    <div className="contact-icons-container flex-center-center">
                      <a href="mailto:nspark@ft.newyorklife.com">
                        <img
                          src={email}
                          id="main-email-icon"
                          className="email-icon contact-icon"
                          alt="navy envelope icon"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nickparknyl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={linkedin}
                          id="main-linkedin-icon"
                          className="linkedin-icon contact-icon"
                          alt="navy linkedin icon"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/2.NPark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={facebook}
                          id="main-facebook-icon"
                          className="facebook-icon contact-icon"
                          alt="navy facebook icon"
                        />
                      </a>
                    </div>
                    <div className="available-hours dropdown-section">
                      <h5 className="flex-center-center">
                        <img
                          src={clock}
                          className="clock-icon details-header-icon"
                          alt="navy clock icon"
                        />
                        Hours:
                      </h5>
                      <p className="available-hours">
                        <span className="bold">M-Sat:</span> 9:00 AM - 5:00 PM
                      </p>
                      <p className="timezone">
                        <span className="bold">(PST)</span>
                      </p>
                    </div>
                    <div className="location dropdown-section">
                      <h5 className="flex-center-center">
                        <img
                          src={ping}
                          className="ping-icon details-header-icon"
                          alt="navy location ping icon"
                        />
                        Location:
                      </h5>
                      <a
                        href="https://www.google.com/maps/place/New+York+Life/@34.1582344,-118.2578968,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c04d9e3ed059:0x1eec029bfd7eb087!8m2!3d34.15823!4d-118.2557081"
                        className="new-york-life-glendale-map"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={map} className="location-map" alt="map of part of Glendale, CA" />
                      </a>
                      <div id="dropdown-location-address" className="location-address-container">
                        <a
                          href="https://www.google.com/maps/place/New+York+Life/@34.1582344,-118.2578968,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c04d9e3ed059:0x1eec029bfd7eb087!8m2!3d34.15823!4d-118.2557081"
                          className="new-york-life-glendale-address location-address"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <p>801 North Brand Blvd, Penthouse,</p>
                          <p>Glendale, CA 91203</p>
                        </a>
                      </div>
                    </div>
                    <div className="states-licensed dropdown-section">
                      <h5 className="flex-center-center">
                        <img
                          src={license}
                          className="license-icon details-header-icon"
                          alt="navy license icon"
                        />
                        States Licensed:
                      </h5>
                      <p>CA, NH, MA, Washington DC, VA, PA</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div id="introduction-text-container" className="flex-object-vertical-horizontal">
              <h3 id="introduction-text">Your financial friend.</h3>
              <div id="homepage-buttons-container">
                <NavLink to="/schedule">
                  <button
                    id="to-schedule-consultation-button"
                    className="homepage-button orange-button"
                  >
                    Free Consultation
                  </button>
                </NavLink>
                <NavLink to="/financial-tools">
                  <button id="to-financial-tools-button" className="homepage-button">
                    Financial Tools
                  </button>
                </NavLink>
                <NavLink to="/educational-resources">
                  <button id="to-educational-resources-button" className="homepage-button">
                    Educational Resources
                  </button>
                </NavLink>
              </div>

              <div className="text-container">
                <p>
                  As your New York Life agent, I can work with you to identify your goals,
                  understand your needs, and offer insurance and financial products that can help
                  you achieve peace of mind. Check out my <NavLink to="/about">about</NavLink> page.
                </p>
              </div>
              <div id="signup-contact-buttons-container" className="flex-center">
                {!TokenService.hasAuthToken() && (
                  <a href="#sign-up-section">
                    <button id="to-sign-up-form-button" className="small-button">
                      Sign up
                    </button>
                  </a>
                )}
                <NavLink to="/contact">
                  <button id="to-contact-button" className="small-button">
                    Contact
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {TokenService.hasAuthToken() ? <></> : <SignUp history={this.props.history} />}
      </main>
    );
  }
}
