import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import phone from "../../../img/phone-navy.png";
import email from "../../../img/email.png";
import linkedin from "../../../img/linkedin.png";
import facebook from "../../../img/facebook.png";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact-section" className="content flex-column-center">
      <ScrollToTopOnMount />
      <h2>Contact</h2>
      <div id="contact-info-container" className="left-align-container">
        <div className="flex-column-start">
          <p>
            <a href="tel:+1-818-731-8616" className="flex-center-center">
              <img
                src={phone}
                className="phone-icon contact-icon"
                alt="navy telephone icon"
              />
              (818) 731-8616
            </a>
          </p>
          <p>
            <a href="mailto:nspark@ft.newyorklife.com" className="flex-center-center">
              <img
                src={email}
                className="email-icon contact-icon"
                alt="navy envelope icon"
              />
              NSPark@ft.newyorklife.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/nickparknyl" className="flex-center-center" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                className="linkedin-icon contact-icon"
                alt="navy linkedin icon"
              />
              nickparknyl
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/2.NPark" className="flex-center-center" target="_blank" rel="noopener noreferrer">
              <img
                src={facebook}
                className="facebook-icon contact-icon"
                alt="navy facebook icon"
              />
              2.NPark
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
