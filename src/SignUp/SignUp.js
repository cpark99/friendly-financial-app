import React, { Component } from "react";
import AuthApiService from "../services/auth-api-service";
import "./SignUp.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import TokenService from "../services/token-service";
import UserContext from "../FriendlyFinancialContext";

export default class SignUp extends Component {
  static contextType = UserContext;
  
  state = { error: null };

  handleLoginSuccess = payload => {
    const { history } = this.props;
    const destination = (history.location.state || {}).from || "/profile";
    this.context.setUserId(payload.user_id)
    history.push(destination);
  };

  handleDemoLogin = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    let email = "MakeMeMoney@ff.com";
    let password = "password";

    AuthApiService.postLogin({
      email: email,
      password: password
    })
      .then(res => {
        email = "";
        password = "";
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess(res.payload);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleRegistrationSuccess = user => {
    if (this.props.history.location.pathname === "/life-insurance-calc") {
      return this.props.history.push("/login");
    } else {
    return this.props.history.push("/login");
    }
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const {
      password,
      email,
      name,
      phone,
      get_email,
      get_call,
      get_newsletter
    } = ev.target;

    let life_insurance_goal = "";

    if (this.props.history.location.pathname === "/life-insurance-calc") {
      life_insurance_goal = this.props.lifeInsuranceGoal;
    }

    this.setState({ error: null });
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      name: name.value,
      phone: phone.value,
      life_insurance_goal: life_insurance_goal,
      get_email: get_email.value === "false" ? false : true,
      get_call: get_call.value === "false" ? false : true,
      get_newsletter: get_newsletter.value === "false" ? false : true
    })
      .then(user => {
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section id="sign-up-section" className="content">
        <ScrollToTopOnMount />
        <h2>Create a Free Account</h2>
        <button onClick={this.handleDemoLogin} className="demo-login-button">Demo</button>
        <div className="text-container">
          <p id="sign-up-section-text">
            Sign up to stay <span className="italic">connected</span> with a
            financial services professional, while keeping track of your
            financial goals (<span className="italic">ie. life insurance</span>
            ). Stay up to date on the latest trends and policies, keeping you{" "}
            <span className="italic">prepared</span> for life.
          </p>
        </div>
        <div role="alert">{error && <p className="red-font">{error}</p>}</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jdoe@gmail.com"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="8888888888"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="age-verification-field form-checkbox">
            <input
              type="checkbox"
              name="age-verification-checkbox"
              id="age-verification-checkbox"
              value="age"
              defaultChecked={true}
            />
            <p className="checkbox-text">I am at least 18 years old</p>
          </div>
          <div className="email-checkbox form-checkbox">
            <input
              type="checkbox"
              name="get_email"
              id="get_email"
              value="get_email"
              defaultChecked={true}
            />
            <p className="checkbox-text">I agree to receive emails*</p>
          </div>
          <div className="call-checkbox form-checkbox">
            <input
              type="checkbox"
              name="get_call"
              id="get_call"
              value="get_call"
              defaultChecked={true}
            />
            <p className="checkbox-text">
              I agree to receive a call* from a professional
            </p>
          </div>
          <div className="newsletter-checkbox form-checkbox">
            <input
              type="checkbox"
              name="get_newsletter"
              id="get_newsletter"
              value="get_newsletter"
              defaultChecked={true}
            />
            <p className="checkbox-text">I agree to receive newsletters</p>
          </div>
          {this.props.history.location.pathname === "/" ? (
            <button id="sign-up-form-button" type="submit">
              Sign up
            </button>
          ) : (
            <button id="sign-up-form-button" type="submit">
              Save Results
            </button>
          )}
          <p className="contact-notice privacy-notice">
            *Emails and calls will <span className="italic">only</span> be for a
            FREE consultation. You will <span className="italic">only</span> be
            contacted by the representing certified financial services
            professional.
          </p>
          <p className="personal-information-notice privacy-notice">
            *Personal information will NOT be shared with third-parties. By
            clicking "Sign up", you agree to information stored solely for the
            purpose of this app.
          </p>
        </form>
      </section>
    );
  }
}
