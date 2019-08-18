import React, { Component } from "react";
import ResourceModal from "../ResourceModal/ResourceModal";
import impressiveRecord from "../pdf/Impressive Record.pdf";
import financialStrength from "../pdf/Financial Strength.pdf";
import impactOnCA from "../pdf/Impact on California.pdf";
import mutualityMeans from "../pdf/Mutuality Means.pdf";
import thingsFinancialLiteracy from "../pdf/5 Things Financial Literacy.pdf";
import costOfWaiting from "../pdf/Cost of Waiting.pdf";
import newBeginnings from "../pdf/New Beginnings Brochure.pdf";
import collegePlanUCLA from "../pdf/UCLA Sample Planning Station.pdf";
import collegePlanUSC from "../pdf/USC Sample Planning Station.pdf";
import wellRoundedCollege from "../pdf/Well Rounded College Funding.pdf";
import collegeCosts from "../pdf/College Costs.pdf";
import taxDiversification from "../pdf/Tax Diversification Brochure.pdf";
import lifeFullOfOptions from "../pdf/Life is Full of Options Brochure.pdf";
import whichTermisRight from "../pdf/Which Term is Right For You.pdf";
import wholeLife from "../pdf/Whole Life Brochure.pdf";
import wholeLifeDecisionTree from "../pdf/Whole Life Decision Tree.pdf";
import termPostcard from "../pdf/Term Postcard.pdf";
import planningStation from "../pdf/Planning Station SAMPLE.pdf";
import reasonsForLifeInsuranceRetirement from "../pdf/Reasons For Life Insurance in Retirement.pdf";
import reasonsForRetirementRollovers from "../pdf/Reasons for Retirement Rollovers.pdf";
import retirementRolloverOptions from "../pdf/Retirement Rollover Options.pdf";
import productDesignTree from "../pdf/Product Decision Tree.pdf";
import "./EducationalResources.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";

export default class EducationalResources extends Component {
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
  };

  handleClose = e => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <section id="educational-resources-section" className="content">
        <ScrollToTopOnMount />
        <h2>Educational Resources</h2>
        <div id="educational-resources-intro-text" className="text-container">
          <p>
            Financial <span className="italic">strength</span> is built on{" "}
            <span className="italic">integrity</span>.
          </p>
          <p>
            Check out these FREE financial resources!
          </p>
        </div>
        <div
          id="educational-resources-container"
          className="left-align-container"
        >
          <div className="flex-object-top-left tablet-column-left">
            <div className="flex-desktop-column">
              <h3 className="educational-resource-list-header">
                About New York Life:
              </h3>
              <ul className="list-of-educational-resources">
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      impressiveRecord,
                      "Impressive Record"
                    );
                  }}
                >
                  <p className="educational-resource">Impressive Record</p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      financialStrength,
                      "Financial Strength"
                    );
                  }}
                >
                  <p className="educational-resource">Financial Strength</p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      impactOnCA,
                      "Impact on California"
                    );
                  }}
                >
                  <p className="educational-resource">Impact on California</p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(mutualityMeans, "Mutuality Means");
                  }}
                >
                  <p className="educational-resource">Mutuality Means</p>
                </li>
              </ul>
              <h3 className="educational-resource-list-header">Life Plans:</h3>
              <ul className="list-of-educational-resources">
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      thingsFinancialLiteracy,
                      "5 Things Financial Literacy"
                    );
                  }}
                >
                  <p className="educational-resource">
                    5 Things Financial Literacy
                  </p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(costOfWaiting, "Cost of Waiting");
                  }}
                >
                  <p className="educational-resource">Cost of Waiting</p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      newBeginnings,
                      "New Beginnings Brochure"
                    );
                  }}
                >
                  <p className="educational-resource">
                    New Beginnings Brochure
                  </p>
                </li>
                <li>
                  <h3
                    className="educational-resource-list-header"
                    id="college-planning-list-header"
                  >
                    College Planning:
                  </h3>
                  <ul className="list-of-educational-resources">
                    <li
                      onClick={e => {
                        this.handleResourceClick(
                          wellRoundedCollege,
                          "Well Rounded College Funding"
                        );
                      }}
                    >
                      <p className="educational-resource">
                        Well Rounded College Funding
                      </p>
                    </li>
                    <li
                      onClick={e => {
                        this.handleResourceClick(collegeCosts, "College Costs");
                      }}
                    >
                      <p className="educational-resource">College Costs</p>
                    </li>
                    <li
                      onClick={e => {
                        this.handleResourceClick(
                          collegePlanUCLA,
                          "UCLA Sample Planning Station"
                        );
                      }}
                    >
                      <p className="educational-resource">
                        UCLA Sample Planning Station
                      </p>
                    </li>
                    <li
                      onClick={e => {
                        this.handleResourceClick(
                          collegePlanUSC,
                          "USC Sample Planning Station"
                        );
                      }}
                    >
                      <p className="educational-resource">
                        USC Sample Planning Station
                      </p>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      taxDiversification,
                      "Tax Diversification Brochure"
                    );
                  }}
                >
                  <p className="educational-resource">
                    Tax Diversification Brochure
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex-desktop-column">
              <h3 className="educational-resource-list-header">
                Life Insurance:
              </h3>
              <p
                id="life-insurance-resources-text"
                className="resource-description-text"
              >
                Our full array of products includes whole life, term, universal,
                and variable universal life. With a variety of products and
                riders to choose from, we can recommend a{" "}
                <span className="italic">customized solution</span> for almost{" "}
                <span className="italic">any</span> need you may have.
              </p>
              <ul className="list-of-educational-resources">
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      lifeFullOfOptions,
                      "Life is Full of Options Brochure"
                    );
                  }}
                >
                  <p className="educational-resource">
                    Life is Full of Options Brochure
                  </p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      whichTermisRight,
                      "Which Term is Right For You.pdf"
                    );
                  }}
                >
                  <p className="educational-resource">
                    Which Term is Right For You
                  </p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(wholeLife, "Whole Life Brochure");
                  }}
                >
                  <p className="educational-resource">Whole Life Brochure</p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(
                      wholeLifeDecisionTree,
                      "Whole Life Decision Tree"
                    );
                  }}
                >
                  <p className="educational-resource">
                    Whole Life Decision Tree
                  </p>
                </li>
                <li
                  onClick={e => {
                    this.handleResourceClick(termPostcard, "Term Postcard");
                  }}
                >
                  <p className="educational-resource">Term Postcard</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-object-bottom-right flex-tablet-column-right">
            <h3 className="educational-resource-list-header">Retirement:</h3>
            <p
              id="retirement-resources-text"
              className="resource-description-text"
            >
              We offer fixed and variable deferred annuities for the
              accumulation stage of retirement, as well as guaranteed future or
              immediate lifetime income annuities (fixed income annuities) that
              can help you turn savings into an{" "}
              <span className="italic">income</span> stream that will last a{" "}
              <span className="italic">lifetime</span>. With a registered
              representative, we can offer mutual funds that may help meet your{" "}
              <span className="italic">long-term</span> financial goals.
            </p>
            <ul className="list-of-educational-resources">
              <li
                onClick={e => {
                  this.handleResourceClick(
                    planningStation,
                    "Planning Station SAMPLE"
                  );
                }}
              >
                <p className="educational-resource">Planning Station SAMPLE</p>
              </li>
              <li
                onClick={e => {
                  this.handleResourceClick(
                    reasonsForLifeInsuranceRetirement,
                    "Reasons For Life Insurance in Retirement"
                  );
                }}
              >
                <p className="educational-resource">
                  Reasons For Life Insurance in Retirement
                </p>
              </li>
              <li
                onClick={e => {
                  this.handleResourceClick(
                    reasonsForRetirementRollovers,
                    "Reasons for Retirement Rollovers"
                  );
                }}
              >
                <p className="educational-resource">
                  Reasons for Retirement Rollovers
                </p>
              </li>
              <li
                onClick={e => {
                  this.handleResourceClick(
                    retirementRolloverOptions,
                    "Retirement Rollover Options"
                  );
                }}
              >
                <p className="educational-resource">
                  Retirement Rollover Options
                </p>
              </li>
              <li
                onClick={e => {
                  this.handleResourceClick(
                    productDesignTree,
                    "Product Decision Tree"
                  );
                }}
              >
                <p className="educational-resource">Product Decision Tree</p>
              </li>
            </ul>
            {this.state.showModal && (
              <ResourceModal
                handleClose={() => {
                  this.handleClose();
                }}
                title={this.state.resourceTitle}
                src={this.state.resourceSrc}
              />
            )}
            <h3 className="educational-resource-list-header">Helpful links:</h3>
            <ul className="list-of-educational-links">
              <li>
                <a href="https://www.newyorklife.com/">
                  https://www.newyorklife.com/
                </a>
              </li>
              <li>
                <a href="/">other</a>
              </li>
              <li>
                <a href="/">Links</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="for-questions-text" className="informative-text">
          <p>
            Any questions or concerns? Contact a{" "}
            <a href="#about-text-author">professional</a>.
          </p>
        </div>
      </section>
    );
  }
}
