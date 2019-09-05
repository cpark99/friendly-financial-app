import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";
import NavButton from "../../withoutState/Utils/NavButton";
import "./EducationalResources.css";

export default class EducationalResources extends Component {
  state = {
    showModal: false,
    resourceSrc: "",
    resourceTitle: ""
  };

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  handleResourceClick = (src, title) => {
    this.setState({
      showModal: true,
      resourceSrc: src,
      resourceTitle: title
    });
    document.body.style.overflow = "hidden";
  };

  handleClose = e => {
    this.setState({ showModal: false });
    document.body.style.overflow = "unset";
  };

  render() {
    return (
      <section id="educational-resources-section" className="content">
        <ScrollToTopOnMount />
        <h2>Educational Resources</h2>
        <div id="educational-resources-intro-text" className="text-container">
          <p>
            Financial strength is built on{" "}
            <span className="italic">integrity</span>.
          </p>
          <p>Check out these FREE financial resources!</p>
        </div>
        <div id="educational-resources-container">
          <div className="flex-responsive-column-row">
          <div
            id="about-new-york-life-container"
            className="educational-resource-container button-container text-container"
          >
            <h3 className="educational-resource-list-header">
              About New York Life:
            </h3>
            <p
              id="about-new-york-life-resources-description"
              className="resource-description-text"
            >
              klajskdjwiefowiegi
            </p>
            <NavButton
              destination={"/educational-resources/about-new-york-life"}
              id={"to-about-new-york-life-button"}
              text={"Click to learn more"}
            />
          </div>
          <div
            id="life-plans-container"
            className="educational-resource-container button-container text-container"
          >
            <h3 className="educational-resource-list-header">Life Plans:</h3>
            <p
              id="life-plans-resources-description"
              className="resource-description-text"
            >
              klajskdjwiefowiegi
            </p>
            <NavButton
              destination={"/educational-resources/life-plans"}
              id={"to-life-plans-button"}
              text={"Click to learn more"}
            />
          </div>
          <div
            id="college-planning-container"
            className="educational-resource-container button-container text-container"
          >
            <h3
              className="educational-resource-list-header"
              id="college-planning-list-header"
            >
              College Planning:
            </h3>
            <p
              id="college-planning-resources-description"
              className="resource-description-text"
            >
              klajskdjwiefowiegi
            </p>
            <NavButton
              destination={"/educational-resources/college-planning"}
              id={"to-college-planning-button"}
              text={"Click to learn more"}
            />
          </div>
          </div>
          <div className="flex-responsive-column-row">
          <div
            id="life-insurance-container"
            className="educational-resource-container button-container text-container"
          >
            <h3 className="educational-resource-list-header">
              Life Insurance:
            </h3>
            <p
              id="life-insurance-resources-description"
              className="resource-description-text"
            >
              klajskdjwiefowiegi
            </p>
            <NavButton
              destination={"/educational-resources/life-insurance"}
              id={"to-life-insurance-button"}
              text={"Click to learn more"}
            />
          </div>
          <div
            id="retirement-container"
            className="educational-resource-container button-container text-container"
          >
            <h3 className="educational-resource-list-header">Retirement:</h3>
            <p
              id="retirement-resources-description"
              className="resource-description-text"
            >
              klajskdjwiefowiegi
            </p>
            <NavButton
              destination={"/educational-resources/retirement"}
              id={"to-retirement-button"}
              text={"Click to learn more"}
            />
          </div>
          <div
            id="helpful-links-container"
            className="educational-resource-container button-container text-container"
          >
            <h3 className="educational-resource-list-header">Helpful links:</h3>
            <ul className="list-of-educational-links">
              <li>
                <a
                  href="https://www.newyorklife.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.newyorklife.com/
                </a>
              </li>
              {/* <li>
                <a href="/">other</a>
              </li>
              <li>
                <a href="/">Links</a>
              </li> */}
            </ul>
          </div>
          </div>
        </div>
        <ForQuestions />
      </section>
    );
  }
}
