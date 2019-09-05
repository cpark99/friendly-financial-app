import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import collegePlanUCLA from "../../../pdf/UCLA Sample Planning Station.pdf";
import collegePlanUSC from "../../../pdf/USC Sample Planning Station.pdf";
import wellRoundedCollege from "../../../pdf/Well Rounded College Funding.pdf";
import collegeCosts from "../../../pdf/College Costs.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";

export default class CollegePlanning extends Component {
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
      { src: wellRoundedCollege, title: "Well Rounded College Funding", key: 1 },
      { src: collegeCosts, title: "College Costs", key: 2 },
      { src: collegePlanUCLA, title: "UCLA Sample Planning Station", key: 3},
      { src: collegePlanUSC, title: "USC Sample Planning Station", key: 4 }
    ];
    return (
      <section id="college-planning-section" className="content">
        <ScrollToTopOnMount />
        <h2>About New York Life</h2>
        <div id="college-planning-content">
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
