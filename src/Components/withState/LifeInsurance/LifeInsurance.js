import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import lifeFullOfOptions from "../../../pdf/Life is Full of Options Brochure.pdf";
import whichTermisRight from "../../../pdf/Which Term is Right For You.pdf";
import wholeLife from "../../../pdf/Whole Life Brochure.pdf";
import wholeLifeDecisionTree from "../../../pdf/Whole Life Decision Tree.pdf";
import termPostcard from "../../../pdf/Term Postcard.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";
import NavButton from "../../withoutState/Utils/NavButton";
import Tooltip from "../../withoutState/Tooltip/Tooltip";

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
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
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
      { src: lifeFullOfOptions, title: "Life is Full of Options Brochure", key: 1 },
      { src: whichTermisRight, title: "Which Term is Right For You", key: 2 },
      { src: wholeLife, title: "Whole Life Brochure", key: 3 },
      { src: wholeLifeDecisionTree, title: "Whole Life Decision Tree", key: 4 },
      { src: termPostcard, title: "Term Postcard", key: 5 }
    ];
    return (
      <section id="life-insurance-section" className="content flex-column-center">
        <ScrollToTopOnMount />
        <h2>Life Insurance</h2>
        <div id="life-insurance-content" className="resource-container text-container">
        <p
                id="life-insurance-resources-text"
                className="resource-description-text"
              >
                Our full array of products includes whole life, term,{" "}
                <span className="italic">universal</span>
                <Tooltip
                  message={
                    "Issued by New York Life Insurance and Annuity Corporation, a wholly owned subsisiary of New York Life."
                  }
                >
                  <sup>1</sup>
                </Tooltip>
                , and <span className="italic">variable</span>
                <Tooltip
                  message={
                    "Offered through NYLIFESecurities LLC (member FINRA/SIPC), a Licensed Insurance Agency."
                  }
                >
                  <sup>2</sup>
                </Tooltip>{" "}
                universal life. With a variety of products and riders to choose
                from, we can recommend a{" "}
                <span className="italic">customized solution</span> for almost{" "}
                any need you may have.
              </p>
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
