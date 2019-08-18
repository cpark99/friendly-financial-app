import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service'
import './SignUp.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

export default class SignUp extends Component {
  state = { error: null }

  // checkIfHomepage = () => {
  //   if (this.props.history.location.pathname === "/") {
  //     return "home-page-only content"
  //   } else {
  //     return "not-home-page content"
  //   }
  // }

  handleRegistrationSuccess = user => {
    return this.props.onSubmit.push('/login')
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { password, email, name, phone, get_email, get_call, get_newsletter } = ev.target

    this.setState({ error: null })
      AuthApiService.postUser({
        email: email.value,
        password: password.value,
        name: name.value,
        phone: phone.value,
        life_insurance_goal: '',
        get_email: get_email.value === 'false' ? false : true,
        get_call: get_call.value === 'false' ? false : true,
        get_newsletter: get_newsletter.value === 'false' ? false : true
      })
        .then(user => {
          this.handleRegistrationSuccess()
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
  }

  render() {
    const { error } = this.state
    return (
      <section id="sign-up-section">
        <ScrollToTopOnMount />
        <h2>Create a Free Account</h2>
        <div role='alert'>
          {error && <p className='red-font'>{error}</p>}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Jane Doe" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="jdoe@gmail.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" id="phone" placeholder="8888888888" pattern="[0-9]{10}" required />
          </div>
          <div className="age-verification-field form-checkbox">
              <input type="checkbox" name="age-verification-checkbox" id="age-verification-checkbox" value="age" defaultChecked={true}  /><p className="checkbox-text">I am at least 18 years old</p>
          </div>
          <div className="email-checkbox form-checkbox">
            <input type="checkbox" name="get_email" id="get_email" value="get_email" defaultChecked={true} /><p className="checkbox-text">I agree to receive emails*</p>
          </div>
          <div className="call-checkbox form-checkbox">
            <input type="checkbox" name="get_call" id="get_call" value="get_call" defaultChecked={true} /><p className="checkbox-text">I agree to receive a call* from a professional</p>
          </div>
          <div className="newsletter-checkbox form-checkbox">
            <input type="checkbox" name="get_newsletter" id="get_newsletter" value="get_newsletter" defaultChecked={true} /><p className="checkbox-text">I agree to receive newsletters</p>
          </div>
          <button id="sign-up-form-button" type="submit">Sign up</button>
          <p className="contact-notice privacy-notice">*Emails and calls will <span className="italic">only</span> be for a FREE consultation. You will <span className="italic">only</span> be contacted by the representing certified financial services professional.</p>
          <p className="personal-information-notice privacy-notice">*Personal information will NOT be shared with third-parties. By clicking "Sign up", you agree to information stored solely for the purpose of this app.</p>
        </form>
      </section>
    );
  }
}
