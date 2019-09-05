import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import thingsFinancialLiteracy from "../../../pdf/5 Things Financial Literacy.pdf";
import costOfWaiting from "../../../pdf/Cost of Waiting.pdf";
import newBeginnings from "../../../pdf/New Beginnings Brochure.pdf";
import taxDiversification from "../../../pdf/Tax Diversification Brochure.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";
import NavButton from "../../withoutState/Utils/NavButton";

export default class LifePlans extends Component {
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
    document.body.style.position = "fixed";
  };

  handleClose = e => {
    this.setState({ showModal: false });
    document.body.style.overflow = "unset";
    document.body.style.position = "initial";
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
      {
        src: thingsFinancialLiteracy,
        title: "5 Things Financial Literacy",
        key: 1
      },
      { src: costOfWaiting, title: "Cost of Waiting", key: 2 },
      { src: newBeginnings, title: "New Beginnings Brochure", key: 3 },
      { src: taxDiversification, title: "Tax Diversification Brochure", key: 4 }
    ];
    return (
      <section id="life-plans-section" className="content flex-column-center">
        <ScrollToTopOnMount />
        <h2>Life Plans</h2>
        <div id="life-plans-content">
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
