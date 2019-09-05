import React, { Component } from "react";
import Results from "../../withoutState/LifeCalcResults/LifeCalcResults";
import ValidationError from "../../withoutState/ValidationError/ValidationError";
import ScrollToTopOnMount from "../../withoutState/ScrollToTopOnMount/ScrollToTopOnMount";
import "./LifeInsuranceCalc.css";
import SignUp from "../SignUp/SignUp";
import TokenService from "../../../services/token-service";
import UserApiService from "../../../services/user-api-service";
import UserContext from "../../../FriendlyFinancialContext";

export default class LifeInsuranceCalc extends Component {
  static contextType = UserContext;

  state = {
    name: {
      value: "",
      touched: false
    },
    income: {
      value: "",
      touched: false
    },
    replace: {
      value: "",
      touched: false
    },
    protect: {
      value: "",
      touched: false
    },
    amount: "",
    nameTwo: {
      value: "Person 2",
      touched: false
    },
    incomeTwo: {
      value: "",
      touched: false
    },
    replaceTwo: {
      value: "",
      touched: false
    },
    protectTwo: {
      value: "",
      touched: false
    },
    amountTwo: "",
    nameTwoError: {
      value: false,
      message: ""
    },
    incomeTwoError: {
      value: false,
      message: ""
    },
    replaceTwoError: {
      value: false,
      message: ""
    },
    protectTwoError: {
      value: false,
      message: ""
    },
    showResults: false
  };

  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }

  updateIncome(income) {
    this.setState({ income: { value: income, touched: true } });
  }

  updateReplace(replace) {
    this.setState({ replace: { value: replace, touched: true } });
  }

  updateProtect(protect) {
    this.setState({ protect: { value: protect, touched: true } });
  }

  updateNameTwo(name) {
    this.setState({ nameTwo: { value: name, touched: false } });
  }

  updateIncomeTwo(income) {
    this.setState({ incomeTwo: { value: income, touched: false } });
  }

  updateReplaceTwo(replace) {
    this.setState({ replaceTwo: { value: replace, touched: false } });
  }

  updateProtectTwo(protect) {
    this.setState({ protectTwo: { value: protect, touched: false } });
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "*Name is required";
    }
  }

  validateIncome() {
    const income = this.state.income.value.trim();
    if (income.length === 0) {
      return "*Income is required";
    }
    if (income <= 0) {
      return "*Valid income is required";
    }
  }

  validateReplace() {
    const replace = this.state.replace.value.trim();
    if (replace.length === 0) {
      return "*Percentage is required";
    }
    if (replace <= 0 || replace > 100) {
      return "*Valid percentage is required";
    }
  }

  validateProtect() {
    const protect = this.state.protect.value.trim();
    if (protect.length === 0) {
      return "*Number of years is required";
    }
    if (protect <= 0) {
      return "*Valid number of years is required";
    }
  }

  validateNameTwo() {
    const name = this.state.nameTwo.value.trim();
    if (name.length !== 0) {
      this.setState({ nameTwo: { value: name, touched: true } });
      return "";
    }
  }

  validateIncomeTwo() {
    const income = this.state.incomeTwo.value.trim();
    if (income.length !== 0) {
      this.setState({ incomeTwo: { value: income, touched: true } });
    }
    if (income <= 0) {
      const message = "*Must be valid for second result";
      this.setState({ incomeTwoError: { value: true, message: message } });
    } else {
      this.setState({ incomeTwoError: { value: false, message: "" } });
    }
  }

  validateReplaceTwo() {
    const replace = this.state.replaceTwo.value.trim();
    if (replace.length !== 0) {
      this.setState({ replaceTwo: { value: replace, touched: true } });
      if (replace <= 0 || replace > 100) {
        const message = "*Must be valid for second result";
        this.setState({ replaceTwoError: { value: true, message: message } });
      } else {
        this.setState({ replaceTwoError: { value: false, message: "" } });
      }
    }
  }

  validateProtectTwo() {
    const protect = this.state.protectTwo.value.trim();
    if (protect.length !== 0) {
      this.setState({ protectTwo: { value: protect, touched: true } });
      if (protect <= 0) {
        const message = "*Must be valid for second result";
        this.setState({ protectTwoError: { value: true, message: message } });
      } else {
        this.setState({ protectTwoError: { value: false, message: "" } });
      }
    }
  }

  calculateResult = () => {
    const income = this.state.income.value;
    const replace = this.state.replace.value;
    const protect = this.state.protect.value;
    const amount = ((income * replace) / 100) * protect;
    this.setState({ amount: amount, showResults: true });
    const incomeTwo = this.state.incomeTwo.value;
    const replaceTwo = this.state.replaceTwo.value;
    const protectTwo = this.state.protectTwo.value;
    if (incomeTwo !== "" && replaceTwo !== "") {
      if (protectTwo !== "") {
        const amountTwo = ((incomeTwo * replaceTwo) / 100) * protectTwo;
        this.setState({ amountTwo: amountTwo });
      }
    }
    document.body.style.overflow = 'hidden';
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validateNameTwo();
    this.validateIncomeTwo();
    this.validateReplaceTwo();
    this.validateProtectTwo();
    this.calculateResult();
  };

  handleClose = () => {
    this.setState({ showResults: false });
    document.body.style.overflow = 'unset';
  };

  handleFormReset = () => {
    this.props.history.go("/life-insurance-calc");
  };

  handleSaveButtonClick = () => { 
    const user_id = this.context.user_id;
    document.body.style.overflow = 'unset';
    UserApiService.updateLifeInsuranceGoal(user_id, {
      life_insurance_goal: this.state.amount
    })
      .then(() => {
        this.props.history.push("/profile")
      })
  };

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    const nameError = this.validateName();
    const incomeError = this.validateIncome();
    const replaceError = this.validateReplace();
    const protectError = this.validateProtect();
    return (
      <section id="life-insurance-calc-section" className="content">
        <ScrollToTopOnMount />
        <h2 id="life-insurance-calc-header">Life Insurance Calculator</h2>
        <form
          id="life-insurance-calc-form"
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <div className="form-field">
            <label htmlFor="life-name">
              <h3 id="life-calc-initial-field-header" className="field-header">
                Name:
              </h3>
            </label>
            <div className="input-area" id="life-name">
              <div className="input-field">
                <label htmlFor="life-name-one">*Person 1: </label>
                <input
                  type="text"
                  name="life-name-one"
                  id="life-name-one"
                  className="registration-control name-input"
                  placeholder={this.context.user ? this.context.user.name : "Jane Doe"}
                  value={this.context.user ? this.context.user.name : undefined}
                  required
                  onChange={e => {
                    this.updateName(e.target.value);
                  }}
                />
                {this.state.name.touched && (
                  <ValidationError message={nameError} />
                )}
              </div>
              <div className="input-field">
                <label htmlFor="life-name-two">&nbsp;Person 2: </label>
                <input
                  type="text"
                  name="life-name-two"
                  id="life-name-two"
                  className="registration-control name-input"
                  placeholder="John Doe"
                  onChange={e => {
                    this.updateNameTwo(e.target.value);
                  }}
                />
                {this.state.nameTwoError.value && (
                  <ValidationError message={this.state.nameTwoError.message} />
                )}{" "}
              </div>
            </div>
            <label htmlFor="life-annual-income">
              <h3 className="field-header">
                What is your current annual income?
              </h3>
            </label>
            <div className="input-area" id="life-annual-income">
              <div className="input-field">
                <label htmlFor="life-annual-income-one">*Person 1: $</label>
                <input
                  type="number"
                  name="life-annual-income-one"
                  id="life-annual-income-one"
                  className="registration-control income-input"
                  required
                  onChange={e => {
                    this.updateIncome(e.target.value);
                  }}
                />
                {this.state.income.touched && (
                  <ValidationError message={incomeError} />
                )}
              </div>
              <div className="input-field">
                <label htmlFor="life-annual-income-two">
                  &nbsp;Person 2: $
                </label>
                <input
                  type="number"
                  name="life-annual-income-two"
                  id="life-annual-income-two"
                  className="registration-control income-input"
                  onChange={e => {
                    this.updateIncomeTwo(e.target.value);
                  }}
                />
                {this.state.incomeTwo.touched &&
                  this.state.incomeTwoError.value && (
                    <ValidationError
                      message={this.state.incomeTwoError.message}
                    />
                  )}
              </div>
            </div>
            <label htmlFor="life-replace-income">
              <h3 className="field-header">
                How much of your annual income would you like to replace should
                you pass away?
              </h3>
            </label>
            <div className="input-area" id="life-replace-income">
              <div className="input-field">
                <label htmlFor="life-replace-income-one">*Person 1: </label>
                <input
                  type="number"
                  name="life-replace-income-one"
                  id="life-replace-income-one"
                  className="registration-control replace-input"
                  required
                  onChange={e => {
                    this.updateReplace(e.target.value);
                  }}
                />
                %
                {this.state.replace.touched && (
                  <ValidationError message={replaceError} />
                )}
              </div>
              <div className="input-field">
                <label htmlFor="life-replace-income-two">
                  &nbsp;Person 2:{" "}
                </label>
                <input
                  type="number"
                  name="life-replace-income-two"
                  id="life-replace-income-two"
                  className="registration-control replace-input"
                  onChange={e => {
                    this.updateReplaceTwo(e.target.value);
                  }}
                />
                %
                {this.state.replaceTwoError.value && (
                  <ValidationError
                    message={this.state.replaceTwoError.message}
                  />
                )}{" "}
              </div>
            </div>
            <label htmlFor="life-years-protect-income">
              <h3 className="field-header no-margin-bot">
                How many years of your income would you like to protect?
              </h3>
              <h4 className="field-header-description">
                (we recommend until youngest dependent reaches age 24)
              </h4>
            </label>
            <div className="input-area" id="life-years-protect-income">
              <div className="input-field">
                <label htmlFor="life-years-protect-income-one">
                  *Person 1:{" "}
                </label>
                <input
                  type="number"
                  name="life-years-protect-income-one"
                  id="life-years-protect-income-one"
                  className="registration-control protect-input"
                  required
                  onChange={e => {
                    this.updateProtect(e.target.value);
                  }}
                />
                (years)
                {this.state.protect.touched && (
                  <ValidationError message={protectError} />
                )}
              </div>
              <div className="input-field">
                <label htmlFor="life-years-protect-income-two">
                  &nbsp;Person 2:{" "}
                </label>
                <input
                  type="number"
                  name="life-years-protect-income-two"
                  id="life-years-protect-income-two"
                  className="registration-control protect-input"
                  onChange={e => {
                    this.updateProtectTwo(e.target.value);
                  }}
                />
                (years)
                {this.state.protectTwoError.value && (
                  <ValidationError
                    message={this.state.protectTwoError.message}
                  />
                )}{" "}
              </div>
            </div>
            <p className="form-submission-note">(* valid input required)</p>
            <div className="form-buttons">
              <button
                type="reset"
                className="registration-button orange-button"
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                Go back
              </button>
              <button type="submit" className="registration-button orange-button">
                Submit
              </button>
            </div>
          </div>
        </form>
        {this.state.showResults && (
          <div id="life-insurance-modal" className="flex-column-center">
            <div
              id="life-calc-close-button"
              className="close-button"
              onClick={e => {
                this.handleClose(e);
              }}
            >
              <p id="life-calc-close-button-text">close</p>
              <span id="life-calc-close-button-symbol">&times;</span>
            </div>
            <h2 id="life-result-header">Results:</h2>
            {this.state.amount && (
              <Results name={this.state.name} data={this.state.amount} />
            )}
            {this.state.amountTwo && (
              <Results name={this.state.nameTwo} data={this.state.amountTwo} />
            )}
            {!TokenService.hasAuthToken() && (
              <p>Sign up for FREE to save your results!</p>
            )}
            {TokenService.hasAuthToken() ? (
              <></>
            ) : (
              <SignUp
                lifeInsuranceGoal={this.state.amount}
                history={this.props.history}
                name={this.state.name}
              />
            )}
            {/* <button id="reset-life-calc-results-button" onClick={e => {this.handleFormReset();}}>Reset</button> */}
            {TokenService.hasAuthToken() && (
              <button
                id="save-life-calc-results-button"
                className="orange-button" 
                onClick={e => {
                  this.handleSaveButtonClick();
                }}
              >
                Save Results
              </button>
            )}
            {this.state.amountTwo && (
              <p className="informative-text">
                *Results will save for only "Person 1".
              </p>
            )}
          </div>
        )}
      </section>
    );
  }
}
