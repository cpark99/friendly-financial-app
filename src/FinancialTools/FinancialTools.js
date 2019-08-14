import React from 'react'
import { NavLink } from 'react-router-dom'
import './FinancialTools.css'

export default function FinancialTools() {
  return (
    <section id="financial-tools-section">
      <h2>Financial Tools</h2>
      <h4>Life Insurance Calculator</h4>
      <div id="life-insurance-calculator-intro-text" className="text-container">
        <p>There's more to life insurance than its name. Depending on the policy, you can <span className="italic">withdraw</span> your growing investment, <span className="italic">tax free</span> (in case you didn't have to use it)!</p>
        <p>(Check out how <a href="/">Disneyland</a>, <a href="/">KFC</a>, and <a href="/">JC Penny</a> got started!)</p>
        <p>Keep your family <span className="italic">protected</span>, no matter what happens.</p>
        <p>Try our <span className="italic">free</span> life insurance calculator, to see how much coverage is right for you!</p>
      </div>
      <NavLink to={"/life-insurance-calc"}>
        <button className="life-insurance-calculator-button">Click to Calculate</button>
      </NavLink>
    </section>
  )
}