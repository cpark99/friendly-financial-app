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
import UserContext from '../FriendlyFinancialContext';
import './App.css';

export default class App extends Component {
  state = {
    user: UserContext.nullUser,
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

  setUser = user => {
    this.setState({ user })
  }

  clearUser = () => {
    this.setUser(UserContext.nullUser)
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser,
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
          <UserContext.Provider value={value}>
            <Route path="/" component={Nav} />
            {this.state.hasError && <p className='red-font'>There was an error! Oh no!</p>}
            <Route exact path="/" component={Main} />
            <PublicOnlyRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/life-insurance-calc" component={LifeInsuranceCalc} />
            <Footer />
          </UserContext.Provider>
        </div>
      </div>
    );
  }
}
