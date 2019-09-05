import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import impressiveRecord from "../../../pdf/Impressive Record.pdf";
import financialStrength from "../../../pdf/Financial Strength.pdf";
import impactOnCA from "../../../pdf/Impact on California.pdf";
import mutualityMeans from "../../../pdf/Mutuality Means.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";
import NavButton from "../../withoutState/Utils/NavButton";
import "./AboutNewYorkLife.css";

export default class AboutNewYorkLife extends Component {
  state = {
    showModal: false,
    resourceSrc: "",
    resourceTitle: ""
  };

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

  renderResources = resources => {
    return resources.map(resource => (
      <li
        key={resource.key}
        onClick={e => {
          this.handleResourceClick(resource.src, resource.title);
        }}
      >
        <p className="educational-resource">{resource.title}</p>
      </li>
    ));
  };

  render() {
    const resources = [
      { src: impressiveRecord, title: "Impressive Record", key: 1 },
      { src: financialStrength, title: "Financial Strength", key: 2 },
      { src: impactOnCA, title: "Impact on California", key: 3 },
      { src: mutualityMeans, title: "Mutuality Means", key: 4 }
    ];
    return (
      <section id="about-new-york-life-section" className="content flex-column-center">
        <ScrollToTopOnMount />
        <h2>About New York Life</h2>
        <div id="about-new-york-life-content">
          <ul className="list-of-educational-resources">
            {resources && this.renderResources(resources)}
          </ul>
        </div>
        {this.state.showModal && (
          <ResourceModal
            handleClose={() => {
              this.handleClose();
            }}
            title={this.state.resourceTitle}
            src={this.state.resourceSrc}
          />
        )}
        <NavButton destination={"/educational-resources"} id={"back-to-educational-resources-button"} text={"Go back"} />
        <ForQuestions />
      </section>
    );
  }
}
