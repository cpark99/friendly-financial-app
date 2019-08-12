import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <section id="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-field">
            <label for="email-field">Email:</label>
            <input type="email" name="email-field" id="email-field" placeholder="jdoe@gmail.com" required />
          </div>
          <div className="form-field">
            <label for="password">Password:</label>
            <input type="password" name="password-field" id="password-field" required />
          </div>
          <button id="login-form-button">Login</button>
        </form>
        <p>New user? <a href="/#sign-up-section">Sign up</a></p>
      </section>
    )
  }
}