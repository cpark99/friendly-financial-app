import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact-section" className="content flex-column-center">
      <ScrollToTopOnMount />
      <h2>Contact</h2>
      <div id="contact-info-container" className="left-align-container">
        <div>
          <p><span className="bold">Phone:</span>{" "}
            <a href="tel:+1-818-731-8616">(818) 731-8616</a>
          </p>
          <p><span className="bold">Email:</span>{" "}
            <a href="mailto:nspark@ft.newyorklife.com">
              nspark@ft.newyorklife.com
            </a>
          </p>
          <p><span className="bold">Linkedin:</span>{" "}
            <a href="https://www.linkedin.com/in/nickparknyl">@nickparknyl</a>
          </p>
          <p><span className="bold">Facebook:</span>{" "}
            <a href="https://www.facebook.com/2.NPark">@2.NPark</a>
          </p>
        </div>
      </div>
    </section>
  );
}
