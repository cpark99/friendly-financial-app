import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { setDefaultBreakpoints } from 'react-socks';
import Nav from '../Nav/Nav';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import LifeInsuranceCalc from '../LifeInsuranceCalc/LifeInsuranceCalc';
import Profile from '../Profile/Profile';
import UserContext from '../FriendlyFinancialContext';
import './App.css';
import SignUp from '../SignUp/SignUp';
import EducationalResources from '../EducationalResources/EducationalResources';
import FinancialTools from '../FinancialTools/FinancialTools';
import ScheduleConsultation from '../ScheduleConsultation/ScheduleConsultation';
import AboutProfessional from '../AboutProfessional/AboutProfessional';
import Contact from '../Contact/Contact';

export default class App extends Component {
  state = {
    user: UserContext.nullUser,
    user_id: "",
    error: null,
    hasError: false
  };

  componentDidMount() {
    document.addEventListener("touchstart", function(){}, true);
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    this.setState({ user })
  }

  clearUser = () => {
    this.setUser(UserContext.nullUser)
  }

  setUserId = (user_id) => {
    this.setState({ user_id: user_id })
  }

  render() {
    const value = {
      user: this.state.user,
      user_id: this.state.user_id,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setUserId: this.setUserId
    }
    setDefaultBreakpoints([
      { xsmall: 0 }, // all mobile devices
      { small: 576 }, // mobile devices (not sure which one's this big)
      { medium: 768 }, // ipad, ipad pro, ipad mini, etc
      { large: 992 }, // smaller laptops
      { tabletLandscape: 1000 },
      { xlarge: 1200 } // laptops and desktops
    ]);
    return (
      <div className='App'>
        <div id="container">
          <UserContext.Provider value={value}>
            <Route path="/" component={Nav} />
            {this.state.hasError && <p className='red-font'>There was an error! Oh no!</p>}
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
            <Footer />
          </UserContext.Provider>
        </div>
      </div>
    );
  }
}
