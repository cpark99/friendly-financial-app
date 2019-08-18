import React from "react";
import { Breakpoint } from 'react-socks';
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import Headshot from "../Utils/Headshot";
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
              <span className="italic">individuals</span>,{" "}
              <span className="italic">families</span>, and{" "}
              <span className="italic">businesses</span> plan for the future. Today,
              as always, we are <span className="italic">committed</span> to meeting
              our obligations and hold true to our principles of{" "}
              <span className="italic">humanity</span>,{" "}
              <span className="italic">integrity</span>, and{" "}
              <span className="italic">financial strength</span>.
            </p>
            <p>
              Whether you're <span className="italic">starting</span> a family,{" "}
              <span className="italic">enjoying</span> retirement, or whenever you{" "}
              <span className="italic">find</span> yourself, we offer products and
              solutions that can <span className="italic">help</span> you reach your
              financial goals.
            </p>
            <p>
              As your New York Life agent, I can work with you to{" "}
              <span className="italic">identify</span> your goals,{" "}
              <span className="italic">understand</span> your needs, and offer
              insurance and financial products that can help you{" "}
              <span className="italic">achieve</span> peace of mind.
            </p>
            <p>
              At New York Life, every decision we make, every action we take, has{" "}
              <span className="italic">one overriding purpose</span>: To be here
              when <span className="italic">you</span>, our policy owners{" "}
              <span className="italic">need</span> us. That's how we help you be{" "}
              <span className="italic">good</span> at life.
            </p>
            <p>
              I can help you ensure a{" "}
              <span className="italic">sound financial future</span> for you, your
              family, and your business by providing{" "}
              <span className="italic">customized</span> recommendations based on
              individual situation and goals.
            </p>
            <div id="contact-info-anchor" />
            <Breakpoint large down>
              <p id="about-text-author"><span className="italic bold">-Nicholas S. Park, MBA</span></p>
            </Breakpoint>
          </div>
        </div>
      </div>
      <div id="about-contact-info-container" className="left-align-container">
        <h4 id="contact-info-title">Contact:</h4>
        <div>
          <p>
            <a href="tel:+1-818-731-8616">(818) 731-8616</a>
          </p>
          <p>
            <a href="mailto:nspark@ft.newyorklife.com">
              nspark@ft.newyorklife.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/nickparknyl">LinkedIn</a>
          </p>
          <p>
            <a href="https://www.facebook.com/2.NPark">Facebook</a>
          </p>
        </div>
      </div>
    </section>
  );
}
