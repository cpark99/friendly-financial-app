import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import impressiveRecord from "../../../pdf/Impressive Record.pdf";
import financialStrength from "../../../pdf/Financial Strength.pdf";
import impactOnCA from "../../../pdf/Impact on California.pdf";
import mutualityMeans from "../../../pdf/Mutuality Means.pdf";
import "./AboutNewYorkLife.css";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";

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
      { src: impressiveRecord, title: "Impressive Record" },
      { src: financialStrength, title: "Financial Strength"},
      { src: impactOnCA, title: "Impact on California"},
      { src: mutualityMeans, title: "Mutuality Means"}
    ];
    return (
      <section id="about-new-york-life-section" className="content">
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
        <ForQuestions />
      </section>
    );
  }
}
