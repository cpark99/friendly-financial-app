import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import lifeFullOfOptions from "../../../pdf/Life is Full of Options Brochure.pdf";
import whichTermisRight from "../../../pdf/Which Term is Right For You.pdf";
import wholeLife from "../../../pdf/Whole Life Brochure.pdf";
import wholeLifeDecisionTree from "../../../pdf/Whole Life Decision Tree.pdf";
import termPostcard from "../../../pdf/Term Postcard.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";

export default class LifeInsurance extends Component {
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
      { src: lifeFullOfOptions, title: "Life is Full of Options Brochure", key: 1 },
      { src: whichTermisRight, title: "Which Term is Right For You", key: 2 },
      { src: wholeLife, title: "Whole Life Brochure", key: 3 },
      { src: wholeLifeDecisionTree, title: "Whole Life Decision Tree", key: 4 },
      { src: termPostcard, title: "Term Postcard", key: 5 }
    ];
    return (
      <section id="life-insurance-section" className="content">
        <ScrollToTopOnMount />
        <h2>About New York Life</h2>
        <div id="life-insurance-content">
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
