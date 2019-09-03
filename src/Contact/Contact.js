import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import phone from "../img/phone-navy.png";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact-section" className="content flex-column-center">
      <ScrollToTopOnMount />
      <h2>Contact</h2>
      <div id="contact-info-container" className="left-align-container">
        <div className="flex-column-start">
          <p className="flex-center-center"><img src={phone} className="phone-icon contact-icon" alt="navy telephone icon" />{" "}
            <a href="tel:+1-818-731-8616">(818) 731-8616</a>
          </p>
          <p className="flex-center-center"><img src={email} className="email-icon contact-icon" alt="navy envelope icon" />{" "}
            <a href="mailto:nspark@ft.newyorklife.com">
              nspark@ft.newyorklife.com
            </a>
          </p>
          <p className="flex-center-center"><img src={linkedin} className="linkedin-icon contact-icon" alt="navy linkedin icon" />{" "}
            <a href="https://www.linkedin.com/in/nickparknyl">@nickparknyl</a>
          </p>
          <p className="flex-center-center"><span className="bold">Facebook:</span>{" "}
            <a href="https://www.facebook.com/2.NPark">@2.NPark</a>
          </p>
        </div>
      </div>
    </section>
  );
}
