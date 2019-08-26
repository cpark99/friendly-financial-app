import React from "react";
import { NavLink } from "react-router-dom";
import "./FinancialTools.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";

export default function FinancialTools() {
  return (
    <section
      id="financial-tools-section"
      className="content flex-column-center"
    >
      <ScrollToTopOnMount />
      <h2>Financial Tools</h2>
      <div id="life-insurance-calculator-tool-section">
        <h4>Life Insurance Calculator</h4>
        <div
          id="life-insurance-calculator-intro-text"
          className="text-container"
        >
          <p>
            There's more to life insurance than its name. Depending on the
            policy, you can <span className="italic">withdraw</span> your
            growing investment, <span className="italic">tax free</span> (in
            case you didn't have to use it)!
          </p>
          <p>
            (Check out how{" "}
            <a
              href="https://www.thinkadvisor.com/2012/04/06/slideshow-6-famous-brands-started-or-saved-by-life/?slreturn=20190721002200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Disneyland
            </a>
            ,{" "}
            <a
              href="https://www.thinkadvisor.com/2012/04/06/slideshow-6-famous-brands-started-or-saved-by-life/?slreturn=20190721002200"
              target="_blank"
              rel="noopener noreferrer"
            >
              McDonald's
            </a>
            ,{" "}
            <a
              href="https://www.thinkadvisor.com/2012/04/06/slideshow-6-famous-brands-started-or-saved-by-life/?slreturn=20190721002200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stanford
            </a>{" "}
            and{" "}
            <a
              href="https://www.thinkadvisor.com/2012/04/06/slideshow-6-famous-brands-started-or-saved-by-life/?slreturn=20190721002200"
              target="_blank"
              rel="noopener noreferrer"
            >
              JC Penny
            </a>{" "}
            got started!)
          </p>
          <p>
            Keep your family <span className="italic">protected</span>, no
            matter what happens.
          </p>
          <p>
            Try our FREE life insurance calculator, to see how much coverage is
            right for you!
          </p>
        </div>
        <NavLink to={"/life-insurance-calc"}>
          <button className="life-insurance-calculator-button gray-button">
            Click to Calculate
          </button>
        </NavLink>
      </div>
    </section>
  );
}
