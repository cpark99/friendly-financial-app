import React, { Component } from "react";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import ResourceModal from "../../withoutState/ResourceModal/ResourceModal";
import planningStation from "../../../pdf/Planning Station SAMPLE.pdf";
import reasonsForLifeInsuranceRetirement from "../../../pdf/Reasons For Life Insurance in Retirement.pdf";
import reasonsForRetirementRollovers from "../../../pdf/Reasons for Retirement Rollovers.pdf";
import retirementRolloverOptions from "../../../pdf/Retirement Rollover Options.pdf";
import productDesignTree from "../../../pdf/Product Decision Tree.pdf";
import ForQuestions from "../../withoutState/ForQuestions/ForQuestions";
import NavButton from "../../withoutState/Utils/NavButton";
import Tooltip from "../../withoutState/Tooltip/Tooltip";
import "./Retirement.css";

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
      {
        src: reasonsForLifeInsuranceRetirement,
        title: "Reasons For Life Insurance in Retirement",
        key: 2
      },
      {
        src: reasonsForRetirementRollovers,
        title: "Reasons for Retirement Rollovers",
        key: 3
      },
      {
        src: retirementRolloverOptions,
        title: "Retirement Rollover Options",
        key: 4
      },
      { src: productDesignTree, title: "Product Decision Tree", key: 5 }
    ];
    return (
      <section id="retirement-section" className="content flex-column-center">
        <ScrollToTopOnMount />
        <h2>Retirement</h2>
        <div id="retirement-content">
          <div className="text-container">
            <p
              id="retirement-resources-text"
              className="resource-description-text"
            >
              We offer <span className="italic">fixed</span>
              <Tooltip
                message={
                  "Issued by New York Life Insurance Company or New York Life Insurance and Annuity Corporation , a wholly owned subsidiary of New Yortk Life."
                }
              >
                <sup>3</sup>
              </Tooltip>{" "}
              and <span className="italic">variable</span>
              <Tooltip
                message={
                  "Offered through NYLIFESecurities LLC (member FINRA/SIPC), a Licensed Insurance Agency."
                }
              >
                <sup>2</sup>
              </Tooltip>{" "}
              deferred annuities for the accumulation stage of retirement, as
              well as <span className="italic">guaranteed</span>
              <Tooltip
                message={
                  "Guarantees backed by the claims-paying ability of the issuer."
                }
              >
                <sup>4</sup>
              </Tooltip>{" "}
              future or immediate lifetime income annuities (fixed income
              annuities) that can help you turn savings into an income stream
              that will last a lifetime. With a registered representative, we
              can offer <span className="italic">mutual funds</span>
              <Tooltip
                message={
                  "Offered through NYLIFESecurities LLC (member FINRA/SIPC), a Licensed Insurance Agency."
                }
              >
                <sup>2</sup>
              </Tooltip>{" "}
              that may help meet your long-term financial goals.
            </p>
          </div>
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
        <NavButton
          destination={"/educational-resources"}
          id={"back-to-educational-resources-button"}
          text={"Go back"}
        />
        <ForQuestions />
      </section>
    );
  }
}
