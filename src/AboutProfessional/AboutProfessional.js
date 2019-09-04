import React from "react";
import { Breakpoint } from "react-socks";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import Headshot from "../Utils/Headshot";
import phone from "../img/phone-navy.png";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import facebook from "../img/facebook.png";
import "./AboutProfessional.css";

export default function AboutProfessional() {
  return (
    <section id="about-financial-services-professional" className="content">
      <ScrollToTopOnMount />
      <h2>Meet Your Certified Professional</h2>
      <div className="flex-responsive-tablet-desktop">
        <div className="flex-object-top-right flex-column-center">
          <Headshot />
          <h5>Nicholas S. Park, MBA</h5>
        </div>
        <div className="flex-object-bottom-left">
          <div id="about-professional-text" className="text-container">
            <p>
              Since our founding in 1845, New York Life has been helping{" "}
              individuals, families and businesses plan for the future. Today,
              as always, we are committed to meeting our obligations and hold
              true to our principles of <span className="italic">humanity</span>
              , <span className="italic">integrity</span>, and{" "}
              <span className="italic">financial strength</span>.
            </p>
            <p>
              Whether you're starting a family, enjoying retirement, or whenever
              you find yourself, we offer products and solutions that can help
              you reach your financial goals.
            </p>
            <p>
              As your New York Life agent, I can work with you to identify your
              goals, understand your needs, and offer insurance and financial
              products that can help you achieve peace of mind.
            </p>
            <p>
              At New York Life, every decision we make, every action we take,
              has one overriding purpose:{" "}
              <span className="italic">
                To be here when you, our policy owners need us.
              </span>{" "}
              That's how we help you be good at life.
            </p>
            <p>
              I can help you ensure a sound financial future for you, your
              family, and your business by providing{" "}
              <span className="italic">customized</span> recommendations based
              on individual situation and goals.
            </p>
            <div id="contact-info-anchor" />
            <Breakpoint large down>
              <p id="about-text-author">
                <span className="italic bold">-Nicholas S. Park, MBA</span>
              </p>
            </Breakpoint>
          </div>
        </div>
      </div>
      <div id="about-contact-info-container" className="left-align-container">
        <div>
          <p>
            <a href="tel:+1-818-731-8616">
              <img
                src={phone}
                className="phone-icon contact-icon"
                alt="navy telephone icon"
              />
              (818) 731-8616
            </a>
          </p>
          <p>
            <a href="mailto:nspark@ft.newyorklife.com">
              <img
                src={email}
                className="email-icon contact-icon"
                alt="navy envelope icon"
              />
              NSPark@ft.newyorklife.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/nickparknyl"  target="_blank" rel="noopener noreferrer">
              <img
                src={linkedin}
                className="linkedin-icon contact-icon"
                alt="navy linkedin icon"
              />
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/2.NPark" target="_blank" rel="noopener noreferrer">
              <img
                src={facebook}
                className="facebook-icon contact-icon"
                alt="navy facebook icon"
              />
              Facebook
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
