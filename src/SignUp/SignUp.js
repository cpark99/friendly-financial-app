import React, { Component } from 'react';
import './SignUp.css';

export default class SignUp extends Component {
  render() {
    return (
      <section id="sign-up-section">
        <h2>Create a Free Account</h2>
        <form>
          <div className="form-field">
            <label htmlFor="name-field">Name:</label>
            <input type="text" name="name-field" id="name-field" placeholder="Jane Doe" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password-field" id="password-field" required />
          </div>
          <div className="form-field">
            <label htmlFor="email-field">Email:</label>
            <input type="email" name="email-field" id="email-field" placeholder="jdoe@gmail.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone-field">Phone:</label>
            <input type="tel" name="phone-field" id="phone-field" placeholder="(818)888-8888" required />
          </div>
          <div className="age-verification-field form-checkbox">
              <input type="checkbox" name="age-verification-checkbox" id="age-verification-checkbox" value="age" checked="true" required /><p className="checkbox-text">I am at least 18 years old</p>
          </div>
          <div className="email-checkbox form-checkbox">
            <input type="checkbox" name="request-email-checkbox" id="request-email-checkbox" value="email" checked="true" /><p className="checkbox-text">I agree to receive emails*</p>
          </div>
          <div className="call-checkbox form-checkbox">
            <input type="checkbox" name="request-call-checkbox" id="request-call-checkbox" value="call" checked="true" /><p className="checkbox-text">I agree to receive a call* from a professional</p>
          </div>
          <div className="newsletter-checkbox form-checkbox">
            <input type="checkbox" name="request-newsletter-checkbox" id="request-newsletter-checkbox" value="newsletter" checked="true" /><p className="checkbox-text">I agree to receive newsletters</p>
          </div>
          <button id="sign-up-form-button">Sign up</button>
          <p className="contact-notice privacy-notice">*Emails and calls will only be for a FREE consultation. You will only be contacted by the representing certified financial services professional.</p>
          <p className="personal-information-notice privacy-notice">*Personal information will NOT be shared with third-parties.</p>
        </form>
      </section>
    );
  }
}
