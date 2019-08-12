import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { setDefaultBreakpoints } from 'react-socks';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import LifeInsuranceCalc from '../LifeInsuranceCalc/LifeInsuranceCalc';
import Profile from '../Profile/Profile';
import FriendlyFinancialContext from '../FriendlyFinancialContext';
// import DATA from '../demo-data';
import './App.css';

export default class App extends Component {
  state = {
    users: [],
    profiles: [],
    loggedIn: false
  }

  addNewUser = user => {
    
  };

  updateLifeInsuranceGoal = value => {
    
  }

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      users: this.state.users,
      profiles: this.state.profiles,
      addNewUser: this.addNewUser,
      updateLifeInsuranceGoal: this.updateLifeInsuranceGoal
    };
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
          <FriendlyFinancialContext.Provider value={contextValue}>
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/life-insurance-calc" component={LifeInsuranceCalc} />
            <Footer />
          </FriendlyFinancialContext.Provider>
        </div>
      </div>
    );
  }
}
