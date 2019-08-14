import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { setDefaultBreakpoints } from 'react-socks';
import Nav from '../Nav/Nav';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import LifeInsuranceCalc from '../LifeInsuranceCalc/LifeInsuranceCalc';
import Profile from '../Profile/Profile';
import ProfileContext from '../FriendlyFinancialContext';
import './App.css';

export default class App extends Component {
  state = {
    profile: ProfileContext.nullProfile,
    error: null,
    hasError: false
  };

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

  setProfile = profile => {
    this.setState({ profile })
  }

  clearProfile = () => {
    this.setProfile(ProfileContext.nullProfile)
  }

  render() {
    const value = {
      profile: this.state.profile,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProfile: this.setProfile,
      clearProfile: this.clearProfile,
    }
    // setDefaultBreakpoints([
    //   { xs: 0 },
    //   { s: 376 },
    //   { m: 426 },
    //   { l: 769 },
    //   { xl: 1025 }
    // ]);
    return (
      <div className='App'>
        <div id="container">
          <ProfileContext.Provider value={value}>
            <Route path="/" component={Nav} />
            {this.state.hasError && <p className='red-font'>There was an error! Oh no!</p>}
            <Route exact path="/" component={Main} />
            <PublicOnlyRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/life-insurance-calc" component={LifeInsuranceCalc} />
            <Footer />
          </ProfileContext.Provider>
        </div>
      </div>
    );
  }
}
