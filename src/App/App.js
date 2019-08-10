import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import LifeInsuranceCalc from '../LifeInsuranceCalc/LifeInsuranceCalc';
import Profile from '../Profile/Profile';
import './App.css';

export default class App extends Component {
  render() {
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
