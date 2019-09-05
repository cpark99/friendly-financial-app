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
    document.body.style.position = "initial";
  }

  handleResourceClick = (src, title) => {
    this.setState({
      showModal: true,
      resourceSrc: src,
      resourceTitle: title
    });
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  handleClose = e => {
    this.setState({ showModal: false });
    document.body.style.overflow = "unset";
    document.body.style.position = "initial";
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
                For 175 years, New York Life has been serving our clients. Learn
                more about what makes us one of the{" "}
                <span className="italic">highest rated</span> companies around.
              </p>
              <NavButton
                destination={"/educational-resources/about-new-york-life"}
                class={"to-about-new-york-life-button orange-button"}
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
                Creating a plan that changes, as your life evolves, is
                essential. Learn about which options are available to you at the
                different stages of your life, to ensure that you are{" "}
                <span className="italic">financially successful</span>.
              </p>
              <NavButton
                destination={"/educational-resources/life-plans"}
                class={"to-life-plans-button orange-button"}
                text={"Click to learn more"}
              />
            </div>
          </div>
          <div className="flex-responsive-column-row">
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
                Whether you have something started or nothing yet - create an
                analysis that will calculate what you need to set aside, to{" "}
                <span className="italic">guarantee</span> your loved one’s
                education.
              </p>
              <NavButton
                destination={"/educational-resources/college-planning"}
                class={"to-college-planning-button orange-button"}
                text={"Click to learn more"}
              />
            </div>
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
                As a top rated mutual company, our goal is to{" "}
                <span className="italic">be there</span> when it matters. Learn
                about the different benefits that come with each unique policy.
              </p>
              <NavButton
                destination={"/educational-resources/life-insurance"}
                class={"to-life-insurance-button orange-button"}
                text={"Click to learn more"}
              />
            </div>
          </div>
          <div className="flex-responsive-column-row">
            <div
              id="retirement-container"
              className="educational-resource-container button-container text-container"
            >
              <h3 className="educational-resource-list-header">Retirement:</h3>
              <p
                id="retirement-resources-description"
                className="resource-description-text"
              >
                Are you satisfied with your retirement? Learn about where you
                are, where you’d like to be, and the best options available to
                you and your loved ones, to enjoy the retirement you deserve.
              </p>
              <NavButton
                destination={"/educational-resources/retirement"}
                class={"to-retirement-button orange-button"}
                text={"Click to learn more"}
              />
            </div>
            <div
              id="helpful-links-container"
              className="educational-resource-container button-container text-container"
            >
              <h3 className="educational-resource-list-header">
                Helpful links:
              </h3>
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
