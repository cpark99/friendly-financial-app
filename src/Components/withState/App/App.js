import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { setDefaultBreakpoints } from 'react-socks';
import Nav from '../Nav/Nav';
import PrivateRoute from '../../withoutState/Utils/PrivateRoute';
import PublicOnlyRoute from '../../withoutState/Utils/PublicOnlyRoute';
import Main from '../Main/Main';
import Footer from '../../withoutState/Footer/Footer';
import Login from '../Login/Login';
import LifeInsuranceCalc from '../LifeInsuranceCalc/LifeInsuranceCalc';
import Profile from '../Profile/Profile';
import UserContext from '../../../FriendlyFinancialContext';
import SignUp from '../SignUp/SignUp';
import EducationalResources from '../EducationalResources/EducationalResources';
import FinancialTools from '../../withoutState/FinancialTools/FinancialTools';
import ScheduleConsultation from '../../withoutState/ScheduleConsultation/ScheduleConsultation';
import AboutProfessional from '../../withoutState/AboutProfessional/AboutProfessional';
import Contact from '../../withoutState/Contact/Contact';
import UserApiService from '../../../services/user-api-service';
import TokenService from '../../../services/token-service';
import AuthApiService from '../../../services/auth-api-service';
import AboutNewYorkLife from '../AboutNewYorkLife/AboutNewYorkLife';
import LifePlans from '../LifePlans/LifePlans';
import CollegePlanning from '../CollegePlanning/CollegePlanning';
import LifeInsurance from '../LifeInsurance/LifeInsurance';
import Retirement from '../Retirement/Retirement';
import NotFound from '../../withoutState/NotFound/NotFound';
import './App.css';

export default class App extends Component {
  state = {
    user: UserContext.nullUser,
    user_id: '',
    error: null,
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      AuthApiService.getUserId().then(res => {
        UserApiService.getUser(res.id)
          .then(this.setUser)
          .then(this.getUserId)
          .catch(this.setError);
      });
    }
  }

  getUserId = user => {
    this.setState({ user_id: this.state.user.id });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = user => {
    this.setState({ user });
  };

  clearUser = () => {
    this.setUser(UserContext.nullUser);
  };

  setUserId = user_id => {
    this.setState({ user_id: user_id });
  };

  updateUser = () => {};

  render() {
    const value = {
      user: this.state.user,
      user_id: this.state.user_id,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setUserId: this.setUserId,
      updateUser: this.updateUser
    };
    setDefaultBreakpoints([
      { xsmall: 0 }, // all mobile devices
      { mobileLandscape: 415 }, // up to iphone6+
      { small: 576 }, // mobile devices (not sure which one's this big)
      { medium: 768 }, // ipad, ipad pro, ipad mini, etc
      { large: 992 }, // smaller laptops
      { tabletLandscape: 1000 },
      { xlarge: 1200 } // laptops and desktops
    ]);
    return (
      <div className="App">
        <div id="container">
          <UserContext.Provider value={value}>
            <Route path="/" component={Nav} />
            {this.state.hasError && <p className="red-font">There was an error! Oh no!</p>}
            <Switch>
              <Route exact path="/" component={Main} />
              <PublicOnlyRoute exact path="/login" component={Login} />
              <PublicOnlyRoute exact path="/signup" component={SignUp} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route exact path="/about" component={AboutProfessional} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/schedule" component={ScheduleConsultation} />
              <Route exact path="/financial-tools" component={FinancialTools} />
              <Route exact path="/life-insurance-calc" component={LifeInsuranceCalc} />
              <Route exact path="/educational-resources" component={EducationalResources} />
              <Route
                exact
                path="/educational-resources/about-new-york-life"
                component={AboutNewYorkLife}
              />
              <Route exact path="/educational-resources/life-plans" component={LifePlans} />
              <Route
                exact
                path="/educational-resources/college-planning"
                component={CollegePlanning}
              />
              <Route exact path="/educational-resources/life-insurance" component={LifeInsurance} />
              <Route exact path="/educational-resources/retirement" component={Retirement} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </UserContext.Provider>
        </div>
      </div>
    );
  }
}
