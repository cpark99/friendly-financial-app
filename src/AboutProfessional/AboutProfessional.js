import React from "react";
import headshot from "../img/headshot-np.jpg";
import "./AboutProfessional.css";

export default function AboutProfessional() {
  return (
    <section id="about-financial-services-professional">
      <h2>Meet Your Certified Professional</h2>
      <img
        src={headshot}
        id="about-professional-image"
        alt="headshot for Nicholas S. Park, MBA, certified financial services professional"
      />
      <h5>Nicholas S. Park, MBA</h5>
      <div id="about-professional-text" className="text-container">
        <p>
          Since our founding in 1845, New York Life has been helping
          individuals, families, and businesses{" "}
          <span className="italic">plan</span> for the future. Today, as always,
          we are <span className="italic">committed</span> to meeting our
          obligations and hold true to our principles of{" "}
          <span className="italic">humanity</span>,{" "}
          <span className="italic">integrity</span>, and{" "}
          <span className="italic">financial strength</span>.
        </p>
        <p>
          Whether you're starting a family, enjoying retirement, or whenever you
          find yourself, we offer products and solutions that can{" "}
          <span className="italic">help</span> you reach your financial goals.
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
          <span className="italic">one</span> overriding purpose: To be here
          when <span className="italic">you</span>, our policy owners{" "}
          <span className="italic">need</span> us. That's how we{" "}
          help you be <span className="italic">good</span> at life.
        </p>
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
