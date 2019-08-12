import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { setDefaultBreakpoints } from 'react-socks';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import LifeInsuranceCalc from '../LifeInsuranceCalc/LifeInsuranceCalc';
import Profile from '../Profile/Profile';
import './App.css';

export default class App extends Component {
  

  render() {
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
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/life-insurance-calc" component={LifeInsuranceCalc} />
          <Footer />
        </div>
      </div>
    );
  }
}
