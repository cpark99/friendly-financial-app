import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import planningStation from "../../../pdf/Planning Station SAMPLE.pdf";
import reasonsForLifeInsuranceRetirement from "../../../pdf/Reasons For Life Insurance in Retirement.pdf";
import reasonsForRetirementRollovers from "../../../pdf/Reasons for Retirement Rollovers.pdf";
import retirementRolloverOptions from "../../../pdf/Retirement Rollover Options.pdf";
import productDesignTree from "../../../pdf/Product Decision Tree.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";

export default class Retirement extends Component {
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
      { src: planningStation, title: "Planning Station SAMPLE", key: 1 },
      { src: reasonsForLifeInsuranceRetirement, title: "Reasons For Life Insurance in Retirement", key: 2 },
      { src: reasonsForRetirementRollovers, title: "Reasons for Retirement Rollovers", key: 3 },
      { src: retirementRolloverOptions, title: "Retirement Rollover Options", key: 4 },
      { src: productDesignTree, title: "Product Decision Tree", key: 5 }
    ];
    return (
      <section id="retirement-section" className="content">
        <ScrollToTopOnMount />
        <h2>About New York Life</h2>
        <div id="retirement-content">
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
